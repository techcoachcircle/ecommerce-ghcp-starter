# UserRegistrationRequest

## Description
Represents the data required to register a new user in the system. This class is used as the request model for the user registration API endpoint. It includes user credentials and profile information, and enforces validation rules as per the API specification.

## Attributes
| Name     | Type   | Description                                      |
|----------|--------|--------------------------------------------------|
| Email    | string | Unique email address for the user                |
| Password | string | User's password (with validation requirements)   |
| Name     | string | Full name of the user                            |
| Address  | string | Shipping/billing address (optional)              |
| Phone    | string | Contact phone number (optional)                  |
| Role     | UserRole | User role (Customer, Seller, Admin; default Customer) |

## Methods
| Name | Inputs | Return Type | Access | Description |
|------|--------|-------------|--------|-------------|
| Validate | None | void / throws | public | Validates the request data (email, password, etc.) |

## Class Dependencies
- **UserRole**: Used for the `Role` property to specify the user's role.
- **Validation utilities**: Used in the `Validate` method to check input formats.
