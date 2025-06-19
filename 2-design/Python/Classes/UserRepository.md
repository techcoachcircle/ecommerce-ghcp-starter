# UserRepository

## Description
The `UserRepository` class is responsible for all database operations related to users. It provides methods to create new users, check for existing users by email, and retrieve user data. This class abstracts the data access logic from the service layer.

## Attributes
| Name         | Type    | Description                                 |
|--------------|---------|---------------------------------------------|
| db_session   | Any     | Database session/connection object          |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| create_user         | user: User                            | User             | public    | Persists a new user in the database                              |
| get_user_by_email   | email: str                            | User or None     | public    | Retrieves a user by email address                                |

## Class Dependencies
- **User**: Used for user entity objects.
