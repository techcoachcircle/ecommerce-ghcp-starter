# UserProfile

## Description
`UserProfile` is a JPA entity representing the personal and contact information of a user. It is linked to the `User` entity and is used for personalization, shipping, and communication.

## Attributes
| Attribute   | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Unique identifier for the profile |
| userId      | UUID      | Reference to the User entity |
| name        | String    | Full name of the user |
| address     | String    | Shipping/billing address |
| phone       | String    | Contact phone number |
| avatarUrl   | String    | URL to profile picture |
| dateOfBirth | Date      | User's date of birth (optional) |

## Methods
| Method Signature         | Input(s) | Return Type | Access | Description |
|-------------------------|----------|-------------|--------|-------------|
| Getters/Setters         | -        | -           | public | Standard JavaBean accessors for all fields |

## Class Dependencies
- **User**: Linked via userId (1:1 relationship).
