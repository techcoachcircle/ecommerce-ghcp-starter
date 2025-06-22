# GH Copilot code - starts
import pytest
from validator import Validator

class TestValidator:
    def test_valid_email(self):
        Validator.validate_email("user@example.com")

    def test_invalid_email(self):
        with pytest.raises(ValueError):
            Validator.validate_email("not-an-email")

    def test_valid_password(self):
        Validator.validate_password("Password123")

    def test_short_password(self):
        with pytest.raises(ValueError):
            Validator.validate_password("1234567")

    def test_long_password(self):
        with pytest.raises(ValueError):
            Validator.validate_password("A1" + "x" * 100)

    def test_password_no_letter(self):
        with pytest.raises(ValueError):
            Validator.validate_password("12345678")

    def test_password_no_number(self):
        with pytest.raises(ValueError):
            Validator.validate_password("abcdefgh")

    def test_valid_phone(self):
        Validator.validate_phone("+1234567890")
        Validator.validate_phone("123-456-7890")

    def test_invalid_phone(self):
        with pytest.raises(ValueError):
            Validator.validate_phone("invalid-phone")
# GH Copilot code - end
