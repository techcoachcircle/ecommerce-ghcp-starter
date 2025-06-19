# RegisterComponent

## Description
The `RegisterComponent` is an Angular component responsible for rendering and managing the user registration form. It handles user input, form validation, and submission of registration data to the backend via the `UserService`. It also manages UI feedback for success and error scenarios.

## Attributes
| Attribute         | Data Type                | Description                                      |
|-------------------|-------------------------|--------------------------------------------------|
| registrationForm  | FormGroup               | Reactive form group for registration fields       |
| isLoading         | boolean                 | Indicates if registration is in progress          |
| errorMessage      | string                  | Stores error messages for display                 |

## Methods
| Method Name         | Inputs                        | Return Type | Access    | Description                                      |
|---------------------|------------------------------|-------------|-----------|--------------------------------------------------|
| ngOnInit            | none                         | void        | public    | Initializes the form and component state          |
| onSubmit            | none                         | void        | public    | Handles form submission and calls registration    |
| handleSuccess       | UserResponse                 | void        | private   | Handles successful registration                   |
| handleError         | ErrorResponse                | void        | private   | Handles registration errors                       |
| buildForm           | none                         | void        | private   | Initializes the registration form                 |

## Class Dependencies
| Class Name     | Usage Description                                 |
|---------------|---------------------------------------------------|
| UserService   | Used to send registration data to the backend API  |
| UserResponse  | Used to type the successful registration response  |
| ErrorResponse | Used to type error responses from the API          |
| FormGroup     | Angular form handling                              |
