# ValidationUtilities

## Description
Static utility class providing methods for validating user input such as email, password, and phone number formats. Used by request and domain models to enforce business rules.

## Attributes
| Name | Type | Description |
|------|------|-------------|
| None |      |             |

## Methods
| Name             | Inputs         | Return Type | Access  | Description |
|------------------|---------------|-------------|---------|-------------|
| ValidateEmail    | string email  | bool        | public static | Validates email format |
| ValidatePassword | string password| bool        | public static | Validates password strength |
| ValidatePhone    | string phone  | bool        | public static | Validates phone number format |

## Class Dependencies
None.
