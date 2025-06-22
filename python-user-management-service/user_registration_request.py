# GH Copilot code - starts
from validator import Validator

class UserRegistrationRequest:
    def __init__(self, email, password, name, address=None, phone=None, role=None):
        self.email = email
        self.password = password
        self.name = name
        self.address = address
        self.phone = phone
        self.role = role or "Customer"

    def validate(self):
        Validator.validate_email(self.email)
        Validator.validate_password(self.password)
        if self.phone:
            Validator.validate_phone(self.phone)
        if self.role not in ("Customer", "Seller", "Admin"):
            raise ValueError("Invalid role")
# GH Copilot code - end
