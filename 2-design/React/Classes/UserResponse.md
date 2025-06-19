# UserResponse (TypeScript Interface)

## Description
`UserResponse` defines the structure of the response returned by the backend API after a successful user registration. It includes user ID, email, role, creation timestamp, and profile information.

## Attributes
| Attribute   | Data Type                              | Description                                 |
|-------------|----------------------------------------|---------------------------------------------|
| id          | string (UUID)                          | Unique identifier for the user              |
| email       | string                                 | User's email address                        |
| role        | 'Customer' \| 'Seller' \| 'Admin'      | User role                                   |
| createdAt   | string (date-time)                     | Account creation timestamp                  |
| profile     | UserProfile                            | User's profile information                  |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| N/A              | N/A                  | N/A         | N/A       | Interface only, no methods                  |

## Dependencies
- Used by `RegisterFormSuccess` and `UserRegistrationService`.
- Uses `UserProfile` type.
