# User

## Description
Domain entity representing a user in the system. Encapsulates all persistent user data, including credentials, profile, and role. Used by the service and repository layers.

## Attributes
| Name        | Type        | Description                                 |
|-------------|-------------|---------------------------------------------|
| Id          | Guid        | Unique identifier for the user              |
| Email       | string      | User's email address                        |
| PasswordHash| string      | Hashed password                             |
| Role        | UserRole    | User's role (Customer, Seller, Admin)       |
| CreatedAt   | DateTime    | Timestamp of user creation                  |
| Profile     | UserProfile | Profile information of the user             |

## Methods
| Name         | Inputs | Return Type | Access | Description |
|--------------|--------|-------------|--------|-------------|
| SetPassword  | string | void        | public | Sets and hashes the user's password |
| Validate     | None   | void/throws | public | Validates user entity state         |

## Class Dependencies
- **UserProfile**: Used for the `Profile` property.
- **UserRole**: Used for the `Role` property.
- **Password hashing utility**: Used in `SetPassword` method.
