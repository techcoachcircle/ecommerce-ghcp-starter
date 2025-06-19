# UserResponse

## Description
Represents the response returned after a successful user registration. Contains user identification, role, creation timestamp, and profile information.

## Attributes
| Name      | Type        | Description                                 |
|-----------|-------------|---------------------------------------------|
| Id        | Guid        | Unique identifier for the user              |
| Email     | string      | User's email address                        |
| Role      | UserRole    | User's role (Customer, Seller, Admin)       |
| CreatedAt | DateTime    | Timestamp of user creation                  |
| Profile   | UserProfile | Profile information of the user             |

## Methods
| Name | Inputs | Return Type | Access | Description |
|------|--------|-------------|--------|-------------|
| None |        |             |        |             |

## Class Dependencies
- **UserProfile**: Used for the `Profile` property.
- **UserRole**: Used for the `Role` property.
