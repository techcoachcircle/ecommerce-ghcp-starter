# GH Copilot code - starts
import pytest
from user_profile import UserProfile

class TestUserProfile:
    def test_profile_init(self):
        profile = UserProfile("John Doe", "123 Main St", "+1234567890", "http://avatar.com/a.png", "1990-01-01")
        assert profile.name == "John Doe"
        assert profile.address == "123 Main St"
        assert profile.phone == "+1234567890"
        assert profile.avatar_url == "http://avatar.com/a.png"
        assert profile.date_of_birth == "1990-01-01"
# GH Copilot code - end
