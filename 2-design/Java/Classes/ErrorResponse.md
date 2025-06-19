# ErrorResponse

## Description
`ErrorResponse` is a Data Transfer Object (DTO) used to represent error details in API responses. It is returned when registration fails due to validation errors, conflicts, or server issues.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| error     | String    | Error code or type |
| message   | String    | Human-readable error message |

## Methods
| Method Signature         | Input(s) | Return Type | Access | Description |
|-------------------------|----------|-------------|--------|-------------|
| Getters/Setters         | -        | -           | public | Standard JavaBean accessors for all fields |

## Class Dependencies
- None (pure DTO, but used by controller and exception handler).
