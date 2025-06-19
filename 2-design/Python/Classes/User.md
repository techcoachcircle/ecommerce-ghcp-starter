# User

## Description
The `User` class represents the user entity in the system. It contains all the core attributes of a user, such as id, email, role, creation date, and profile information. This class is used for both persistence and business logic purposes.

## Attributes
| Name         | Type         | Description                                 |
|--------------|--------------|---------------------------------------------|
| id           | str (UUID)   | Unique identifier for the user              |
| email        | str          | User's email address                        |
| password_hash| str          | Hashed password                             |
| role         | str          | User's role (Customer, Seller, Admin)       |
| created_at   | datetime     | Account creation timestamp                  |
| profile      | UserProfile  | User's profile information                  |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| set_password        | password: str                         | None             | public    | Hashes and sets the user's password                              |
| check_password      | password: str                         | bool             | public    | Verifies a password against the hash                             |

## Class Dependencies
- **UserProfile**: Used for storing profile information.
- **PasswordHasher**: Used for password hashing and verification.
