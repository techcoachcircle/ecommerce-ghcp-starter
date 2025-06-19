# ErrorResponse (TypeScript Interface)

## Description
`ErrorResponse` defines the structure of error responses returned by the backend API during registration failures. It is used for displaying error messages in the UI.

## Attributes
| Attribute   | Data Type   | Description                                 |
|-------------|------------|---------------------------------------------|
| error       | string      | Error code or type                          |
| message     | string      | Human-readable error message                |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| N/A              | N/A                  | N/A         | N/A       | Interface only, no methods                  |

## Dependencies
- Used by `RegisterFormError` and `UserRegistrationService`.
