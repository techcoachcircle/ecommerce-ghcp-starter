# GH Copilot code - starts
from user import User
from user_profile import UserProfile

class UserResponse:
    def __init__(self, id, email, role, created_at, profile):
        self.id = id
        self.email = email
        self.role = role
        self.created_at = created_at
        self.profile = profile

    @classmethod
    def from_user(cls, user: User):
        profile_dict = {
            "name": user.profile.name,
            "address": user.profile.address,
            "phone": user.profile.phone,
            "avatarUrl": getattr(user.profile, "avatar_url", None),
            "dateOfBirth": getattr(user.profile, "date_of_birth", None)
        }
        return cls(
            id=user.id,
            email=user.email,
            role=user.role,
            created_at=user.created_at.isoformat() + "Z",
            profile=profile_dict
        )
# GH Copilot code - end
