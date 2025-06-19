# RegisterFormFields (React Function Component)

## Description
`RegisterFormFields` is a reusable subcomponent that renders the core input fields for user registration, such as email, password, and name. It receives props for value, change handlers, and validation errors.

## Attributes
| Attribute         | Data Type         | Description                                 |
|-------------------|------------------|---------------------------------------------|
| props             | object           | Props for field values, handlers, errors    |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| onChange         | event                | void        | public    | Handles input changes for fields            |

## Dependencies
- Used by `RegisterForm`.
- Uses `UserRegistrationRequest` type for field structure.
