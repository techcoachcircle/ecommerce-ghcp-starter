# UserRepository

## Description
`UserRepository` is a Spring Data JPA repository interface for performing CRUD operations on the `User` entity. It provides methods for saving, finding, and checking the existence of users by email.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| (none)    |           | Repository interfaces do not have fields |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| save(User user)                          | User user  | User        | public | Persists a user entity |
| findByEmail(String email)                | String email | Optional<User> | public | Finds a user by email |
| existsByEmail(String email)              | String email | boolean     | public | Checks if a user exists by email |

## Class Dependencies
- **User**: Entity managed by this repository.
