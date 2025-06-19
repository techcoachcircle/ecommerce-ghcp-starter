import pytest
from user_registration_api import app, db

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
