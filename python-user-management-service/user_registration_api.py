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

# Implement APIs here




if __name__ == "__main__":
    app.run(port=8081, debug=True)