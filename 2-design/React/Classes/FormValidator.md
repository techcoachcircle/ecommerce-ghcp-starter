# FormValidator (Class)

## Description
`FormValidator` is a utility class for validating user registration form input fields. It provides static methods for validating email, password, and other fields as per business rules and API requirements.

## Attributes
| Attribute         | Data Type         | Description                                 |
|-------------------|------------------|---------------------------------------------|
| N/A               | N/A              | Stateless utility class                     |

## Methods
| Method           | Inputs                | Return Type         | Access    | Description                                 |
|------------------|----------------------|---------------------|-----------|---------------------------------------------|
| validateEmail    | string (email)        | boolean             | public    | Validates email format                      |
| validatePassword | string (password)     | boolean             | public    | Validates password strength                 |
| validateFields   | UserRegistrationRequest | boolean           | public    | Validates all required fields               |

## Dependencies
- Uses `UserRegistrationRequest` type for field validation.
