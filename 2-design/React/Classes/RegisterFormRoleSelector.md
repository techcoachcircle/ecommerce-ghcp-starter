# RegisterFormRoleSelector (React Function Component)

## Description
`RegisterFormRoleSelector` is a subcomponent that allows the user to select their role (Customer, Seller, Admin) during registration. It provides a dropdown or radio button UI for role selection.

## Attributes
| Attribute         | Data Type         | Description                                 |
|-------------------|------------------|---------------------------------------------|
| props             | object           | Props for selected role, change handler     |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| onChange         | event                | void        | public    | Handles role selection changes              |

## Dependencies
- Used by `RegisterForm`.
- Uses `UserRegistrationRequest` type for role field.
