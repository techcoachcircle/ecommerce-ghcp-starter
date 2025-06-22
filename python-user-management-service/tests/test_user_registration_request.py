# GH Copilot code - starts
import pytest
from user_registration_request import UserRegistrationRequest

class TestUserRegistrationRequest:
    def test_valid_request(self):
        req = UserRegistrationRequest("a@b.com", "Password123", "John Doe")
        req.validate()

    def test_invalid_email(self):
        req = UserRegistrationRequest("not-an-email", "Password123", "John Doe")
        with pytest.raises(ValueError):
            req.validate()

    def test_invalid_password(self):
        req = UserRegistrationRequest("a@b.com", "1234567", "John Doe")
        with pytest.raises(ValueError):
            req.validate()

    def test_invalid_role(self):
        req = UserRegistrationRequest("a@b.com", "Password123", "John Doe", role="SuperUser")
        with pytest.raises(ValueError):
            req.validate()

    def test_invalid_phone(self):
        req = UserRegistrationRequest("a@b.com", "Password123", "John Doe", phone="invalid-phone")
        with pytest.raises(ValueError):
            req.validate()
# GH Copilot code - end
