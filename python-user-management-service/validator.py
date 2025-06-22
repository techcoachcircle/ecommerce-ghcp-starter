# GH Copilot code - starts
import re

class Validator:
    @staticmethod
    def validate_email(email: str):
        # Simple regex for email validation
        if not email or not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
            raise ValueError("Invalid email format")

    @staticmethod
    def validate_password(password: str):
        if not password or len(password) < 8:
            raise ValueError("Password must be at least 8 characters long")
        if len(password) > 64:
            raise ValueError("Password must be at most 64 characters long")
        if not re.search(r"[A-Za-z]", password) or not re.search(r"\d", password):
            raise ValueError("Password must contain at least one letter and one number")

    @staticmethod
    def validate_phone(phone: str):
        if phone is None or phone == "":
            return  # Optional
        if not re.match(r"^\+?[0-9\- ]{7,20}$", phone):
            raise ValueError("Invalid phone number format")
# GH Copilot code - end
