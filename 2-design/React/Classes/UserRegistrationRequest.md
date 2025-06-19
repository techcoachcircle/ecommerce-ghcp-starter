# UserRegistrationRequest (TypeScript Interface)

## Description
`UserRegistrationRequest` defines the structure of the data sent to the backend API when registering a new user. It includes all required and optional fields as per the API spec.

## Attributes
| Attribute   | Data Type                              | Description                                 |
|-------------|----------------------------------------|---------------------------------------------|
| email       | string                                 | Unique email address for the user           |
| password    | string                                 | Password (min 8 chars, 1 letter, 1 number)  |
| name        | string                                 | Full name of the user                       |
| address     | string (optional)                      | Shipping/billing address                    |
| phone       | string (optional)                      | Contact phone number                        |
| role        | 'Customer' \| 'Seller' \| 'Admin' (optional) | User role (default Customer)                |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| N/A              | N/A                  | N/A         | N/A       | Interface only, no methods                  |

## Dependencies
- Used by `RegisterForm`, `RegisterFormFields`, `RegisterFormRoleSelector`, `UserRegistrationService`, and `FormValidator`.
