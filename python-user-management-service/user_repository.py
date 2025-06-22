# GH Copilot code - starts
from user import User

class UserRepository:
    def __init__(self, db_session):
        self.db_session = db_session
        self._users = {}  # In-memory for now, keyed by email

    def create_user(self, user: User):
        self._users[user.email] = user
        return user

    def get_user_by_email(self, email: str):
        return self._users.get(email)
# GH Copilot code - end
