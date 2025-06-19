# IUserRepository

## Description
Interface for user data access operations. Abstracts the persistence layer, allowing for different storage implementations.

## Attributes
| Name | Type | Description |
|------|------|-------------|
| None |      |             |

## Methods
| Name         | Inputs         | Return Type | Access | Description |
|--------------|---------------|-------------|--------|-------------|
| AddUser      | User           | void        | public | Persists a new user entity |
| GetUserByEmail| string (email)| User        | public | Retrieves a user by email |

## Class Dependencies
- **User**: Used for persistence.
