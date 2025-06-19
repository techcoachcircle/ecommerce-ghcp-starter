# UserProfileRepository

## Description
`UserProfileRepository` is a Spring Data JPA repository interface for performing CRUD operations on the `UserProfile` entity. It provides methods for saving and retrieving user profiles.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| (none)    |           | Repository interfaces do not have fields |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| save(UserProfile profile)                | UserProfile profile | UserProfile | public | Persists a user profile entity |
| findByUserId(UUID userId)                | UUID userId | Optional<UserProfile> | public | Finds a profile by user ID |

## Class Dependencies
- **UserProfile**: Entity managed by this repository.
