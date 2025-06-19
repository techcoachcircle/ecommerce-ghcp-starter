# UserProfile (TypeScript Interface)

## Description
`UserProfile` defines the structure for user profile information, including personal and contact details. It is used for both registration and user management features.

## Attributes
| Attribute   | Data Type   | Description                                 |
|-------------|-------------|---------------------------------------------|
| name        | string      | Full name of the user                       |
| address     | string (optional) | Shipping/billing address              |
| phone       | string (optional) | Contact phone number                  |
| avatarUrl   | string (optional) | URL to profile picture                |
| dateOfBirth | string (optional) | User's date of birth (YYYY-MM-DD)     |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| N/A              | N/A                  | N/A         | N/A       | Interface only, no methods                  |

## Dependencies
- Used by `RegisterFormProfileFields` and as part of `UserResponse`.
