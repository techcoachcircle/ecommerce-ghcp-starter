# UserResponse

## Description
`UserResponse` is a Data Transfer Object (DTO) representing the response sent to the client upon successful user registration. It contains user details and profile information, excluding sensitive data like passwords.

## Attributes
| Attribute   | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Unique identifier for the user |
| email       | String    | Registered email address |
| role        | String    | User role (Customer, Seller, Admin) |
| createdAt   | DateTime  | Account creation timestamp |
| profile     | UserProfile | User profile details (name, address, phone, etc.) |

## Methods
| Method Signature         | Input(s) | Return Type | Access | Description |
|-------------------------|----------|-------------|--------|-------------|
| Getters/Setters         | -        | -           | public | Standard JavaBean accessors for all fields |

## Class Dependencies
- **UserProfile**: Used to encapsulate profile information in the response.
