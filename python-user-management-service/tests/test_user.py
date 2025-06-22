# GH Copilot code - starts
import pytest
from user import User
from user_profile import UserProfile

class TestUser:
    def test_set_and_check_password(self):
        user = User(email="a@b.com", password="Password123", profile=UserProfile("John Doe"))
        assert user.check_password("Password123")
        assert not user.check_password("WrongPass")

    def test_user_fields(self):
        profile = UserProfile("Jane Doe", "Addr", "+1234567890")
        user = User(email="jane@doe.com", password="Password123", role="Seller", profile=profile)
        assert user.email == "jane@doe.com"
        assert user.role == "Seller"
        assert user.profile.name == "Jane Doe"
# GH Copilot code - end
