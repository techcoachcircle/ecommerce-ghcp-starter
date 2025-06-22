import json
import pytest
from user_registration_api import app, db, user_service
from user_repository import UserRepository

@pytest.fixture(autouse=True)
def reset_user_repository():
    # Reset the in-memory user repository before each test
    user_service.user_repository = UserRepository(None)
    yield

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

def valid_user_payload(email="user1@example.com", password="Password123", name="John Doe", address=None, phone=None, role=None):
    payload = {
        "email": email,
        "password": password,
        "name": name
    }
    if address:
        payload["address"] = address
    if phone:
        payload["phone"] = phone
    if role:
        payload["role"] = role
    return payload

def test_register_user_success(client):
    payload = valid_user_payload()
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 201
    data = response.get_json()
    assert data["email"] == payload["email"]
    assert data["role"] == "Customer"
    assert "id" in data
    assert "createdAt" in data
    assert "profile" in data
    assert data["profile"]["name"] == payload["name"]

def test_register_user_missing_required_fields(client):
    payload = {"email": "user2@example.com"}  # Missing password and name
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 400
    data = response.get_json()
    assert "error" in data
    assert "message" in data
    assert "Missing required fields" in data["message"]

def test_register_user_invalid_email(client):
    payload = valid_user_payload(email="not-an-email")
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code in (400, 422)
    data = response.get_json()
    assert "error" in data
    assert "message" in data
    assert "Invalid email format" in data["message"]

def test_register_user_weak_password(client):
    payload = valid_user_payload(password="1234567")  # Too short, no letter
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 400
    data = response.get_json()
    assert "error" in data
    assert "message" in data
    assert "Password must be at least 8 characters long" in data["message"]

def test_register_user_duplicate_email(client):
    payload = valid_user_payload(email="user3@example.com")
    # First registration should succeed
    response1 = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response1.status_code == 201
    # Second registration with same email should fail
    response2 = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response2.status_code == 409
    data = response2.get_json()
    assert "error" in data
    assert "message" in data
    assert "Email already exists" in data["message"]

def test_register_user_invalid_phone(client):
    payload = valid_user_payload(phone="invalid-phone")
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 422
    data = response.get_json()
    assert "error" in data
    assert "message" in data
    assert "Invalid phone number format" in data["message"]

def test_register_user_invalid_role(client):
    payload = valid_user_payload(role="SuperUser")
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 400
    data = response.get_json()
    assert "error" in data
    assert "message" in data
    assert "Invalid role" in data["message"]

def test_register_user_long_password(client):
    long_password = "A1" + "x" * 62  # 64 chars, valid
    payload = valid_user_payload(password=long_password)
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 201
    data = response.get_json()
    assert data["email"] == payload["email"]

def test_register_user_password_too_long(client):
    too_long_password = "A1" + "x" * 100  # >64 chars
    payload = valid_user_payload(password=too_long_password)
    response = client.post("/users/register", data=json.dumps(payload), content_type="application/json")
    assert response.status_code == 400
    data = response.get_json()
    assert "error" in data
    assert "message" in data
