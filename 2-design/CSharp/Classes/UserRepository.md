# UserRepository

## Description
Concrete implementation of `IUserRepository`. Handles user data persistence and retrieval from the database.

## Attributes
| Name           | Type        | Description                                 |
|----------------|-------------|---------------------------------------------|
| _dbContext     | DbContext   | Database context for data access            |

## Methods
| Name         | Inputs         | Return Type | Access | Description |
|--------------|---------------|-------------|--------|-------------|
| AddUser      | User           | void        | public | Persists a new user entity |
| GetUserByEmail| string (email)| User        | public | Retrieves a user by email |

## Class Dependencies
- **DbContext**: Used for database operations.
- **User**: Used for persistence.
