# GH Copilot code - starts
import uuid
from datetime import datetime
from user_profile import UserProfile
import hashlib

class User:
    def __init__(self, email, password, role="Customer", profile=None, id=None, created_at=None):
        self.id = id or str(uuid.uuid4())
        self.email = email
        self.password_hash = None
        self.set_password(password)
        self.role = role
        self.created_at = created_at or datetime.utcnow()
        self.profile = profile

    def set_password(self, password: str):
        # Simple hash for demonstration; use bcrypt/argon2 in production
        self.password_hash = hashlib.sha256(password.encode()).hexdigest()

    def check_password(self, password: str) -> bool:
        return self.password_hash == hashlib.sha256(password.encode()).hexdigest()
# GH Copilot code - end
