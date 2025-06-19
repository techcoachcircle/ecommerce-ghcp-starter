# RegisterForm (React Function Component)

## Description
`RegisterForm` is the main React component responsible for rendering the user registration form UI. It manages the form state, handles user input, validation, and submission to the backend API. It orchestrates subcomponents for modularity and reusability.

## Attributes
| Attribute         | Data Type         | Description                                 |
|-------------------|------------------|---------------------------------------------|
| props             | object           | Props passed to the component (if any)      |
| state             | object           | Local state for form fields and errors      |

## Methods
| Method           | Inputs                | Return Type | Access    | Description                                 |
|------------------|----------------------|-------------|-----------|---------------------------------------------|
| handleChange     | event                | void        | private   | Handles input changes for form fields       |
| handleSubmit     | event                | void        | private   | Handles form submission and validation      |
| setError         | error message        | void        | private   | Sets error state for the form              |
| setSuccess       | success message      | void        | private   | Sets success state for the form            |

## Dependencies
- Uses `RegisterFormFields`, `RegisterFormProfileFields`, `RegisterFormRoleSelector`, `RegisterFormError`, `RegisterFormSuccess` as subcomponents.
- Uses `UserRegistrationService` for API calls.
- Uses `UserRegistrationRequest`, `UserResponse`, `ErrorResponse` types for data modeling.
