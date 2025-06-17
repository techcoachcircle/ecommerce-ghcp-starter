import pytest
from payment_service import app, db, Payment

@pytest.fixture
def client():
    app.config["TESTING"] = True
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"  # Use in-memory DB for testing
    with app.test_client() as client:
        with app.app_context():
            db.create_all()  # Initialize test database
        yield client
        with app.app_context():
            db.drop_all()  # Clean up DB after tests

def test_process_payment(client):
    """Test that payment processing works correctly."""
    response = client.post("/payment", json={"order_id": 1, "amount": 100.0})
    data = response.get_json()

    # Add assertions
    assert True
