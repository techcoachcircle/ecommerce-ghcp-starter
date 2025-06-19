# ErrorResponse

## Description
The `ErrorResponse` class defines the schema for error responses returned by the API. It is used to standardize error messages and codes for all error scenarios, such as invalid input, duplicate email, or server errors.

## Attributes
| Name    | Type   | Description                                 |
|---------|--------|---------------------------------------------|
| error   | str    | Error code or type                          |
| message | str    | Human-readable error message                |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| to_dict             | None                                  | dict             | public    | Converts the error response to a dictionary                      |

## Class Dependencies
None (used by controllers and services for error handling).
