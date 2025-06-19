# UserAlreadyExistsException

## Description
`UserAlreadyExistsException` is a custom exception thrown when a registration attempt is made with an email that already exists in the system. It is used to signal conflict errors to the controller and client.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| message   | String    | Exception message |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| UserAlreadyExistsException(String message) | String message | - | public | Constructor with error message |

## Class Dependencies
- Used by `UserService` to signal duplicate email errors.
