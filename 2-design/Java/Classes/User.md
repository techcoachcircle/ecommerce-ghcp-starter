# User

## Description
`User` is a JPA entity representing a user in the ShopSphere platform. It stores authentication and authorization data, such as email, password hash, role, and status.

## Attributes
| Attribute     | Data Type | Description |
|---------------|-----------|-------------|
| id            | UUID      | Unique identifier for the user |
| email         | String    | User's email address (unique) |
| passwordHash  | String    | Hashed password |
| role          | Role      | User role (Customer, Seller, Admin) |
| createdAt     | DateTime  | Account creation timestamp |
| updatedAt     | DateTime  | Last profile update timestamp |
| isActive      | Boolean   | Account active status |

## Methods
| Method Signature         | Input(s) | Return Type | Access | Description |
|-------------------------|----------|-------------|--------|-------------|
| Getters/Setters         | -        | -           | public | Standard JavaBean accessors for all fields |

## Class Dependencies
- **Role**: Enum used for user roles.
- **UserProfile**: Linked via 1:1 relationship (not always directly referenced in this class).
