# GH Copilot code - starts
from user import User
from user_profile import UserProfile
from user_registration_request import UserRegistrationRequest
from user_repository import UserRepository
from error_response import ErrorResponse

class UserService:
    def __init__(self, user_repository=None):
        self.user_repository = user_repository or UserRepository(None)

    def register_user(self, registration_data: dict):
        req = UserRegistrationRequest(**registration_data)
        try:
            req.validate()
        except ValueError as e:
            raise ErrorResponse("InvalidInput", str(e))
        existing = self.user_repository.get_user_by_email(req.email)
        if existing:
            raise ErrorResponse("DuplicateEmail", "Email already exists")
        profile = UserProfile(req.name, req.address, req.phone)
        user = User(email=req.email, password=req.password, role=req.role, profile=profile)
        self.user_repository.create_user(user)
        return user
# GH Copilot code - end
