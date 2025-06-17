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


# Payment Model
class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), default="Pending")

# Create the database
with app.app_context():
    db.create_all()

# Process Payment
@app.route("/payment", methods=["POST"])
def process_payment():
    data = request.get_json()
    if not data or "order_id" not in data or "amount" not in data:
        return jsonify({"error": "Invalid request"}), 400

    # Simulate payment validation (Bug: Validation always succeeds!)
    payment = Payment(order_id=data["order_id"], amount=data["amount"], status="Paid")
    db.session.add(payment)
    db.session.commit()

    return jsonify({"id": payment.id, "status": payment.status})

# Fetch Payment Details
@app.route("/payment/<int:payment_id>", methods=["GET"])
def get_payment(payment_id):
    payment = Payment.query.get(payment_id)
    if not payment:
        return jsonify({"error": "Payment not found"}), 404

    return jsonify({"id": payment.id, "order_id": payment.order_id, "amount": payment.amount, "status": payment.status})

if __name__ == "__main__":
    app.run(port=5000, debug=True)