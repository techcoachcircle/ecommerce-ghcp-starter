# GlobalExceptionHandler

## Description
`GlobalExceptionHandler` is a Spring `@ControllerAdvice` class that handles exceptions thrown by controllers across the application. It maps exceptions to appropriate HTTP responses and error payloads, ensuring consistent error handling for the User Registration API and other endpoints.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| (none)    |           | Stateless, uses Spring annotations |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| handleUserAlreadyExists(UserAlreadyExistsException ex) | UserAlreadyExistsException ex | ResponseEntity<ErrorResponse> | public | Handles duplicate email errors, returns 409 |
| handleInvalidInput(InvalidInputException ex)           | InvalidInputException ex     | ResponseEntity<ErrorResponse> | public | Handles validation errors, returns 400/422 |
| handleOtherExceptions(Exception ex)                    | Exception ex                | ResponseEntity<ErrorResponse> | public | Handles generic errors, returns 500 |

## Class Dependencies
- **UserAlreadyExistsException**: Exception handled for duplicate email.
- **InvalidInputException**: Exception handled for validation errors.
- **ErrorResponse**: Used to return error details in the response.
