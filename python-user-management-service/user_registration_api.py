from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Set absolute path to the SQLite database file
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "db"))
DATABASE_PATH = os.path.join(BASE_DIR, "ecommerce-db.sqlite3")

# SQLite database configuration
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DATABASE_PATH}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# GH Copilot code - starts
from user_service import UserService
from user_response import UserResponse
from error_response import ErrorResponse

user_service = UserService()

@app.route("/users/register", methods=["POST"])
def register_user():
    try:
        data = request.get_json()
        # Defensive: ensure required fields
        if not data or "password" not in data or "name" not in data or "email" not in data:
            return jsonify({"error": "InvalidInput", "message": "Missing required fields"}), 400
        user = user_service.register_user(data)
        response = UserResponse.from_user(user)
        return jsonify({
            "id": response.id,
            "email": response.email,
            "role": response.role,
            "createdAt": response.created_at,
            "profile": response.profile
        }), 201
    except ErrorResponse as e:
        if e.error == "DuplicateEmail":
            return jsonify(e.to_dict()), 409
        if "phone number format" in e.message:
            return jsonify(e.to_dict()), 422
        if "Password must be at most 64 characters long" in e.message:
            return jsonify(e.to_dict()), 400
        if "Invalid role" in e.message:
            return jsonify(e.to_dict()), 400
        return jsonify(e.to_dict()), 400
    except Exception as e:
        return jsonify({"error": "ServerError", "message": str(e)}), 500
# GH Copilot code - end




if __name__ == "__main__":
    app.run(port=8081, debug=True)