# GH Copilot code - starts
class ErrorResponse(Exception):
    def __init__(self, error, message):
        super().__init__(message)
        self.error = error
        self.message = message

    def to_dict(self):
        return {"error": self.error, "message": self.message}
# GH Copilot code - end
