# UserService

## Description
The `UserService` is an Angular service responsible for handling all user-related API interactions, including user registration. It abstracts HTTP requests and provides methods for registering new users and handling responses from the backend.

## Attributes
| Attribute   | Data Type    | Description                                 |
|-------------|-------------|---------------------------------------------|
| http        | HttpClient  | Angular service for making HTTP requests    |
| apiUrl      | string      | Base URL for the user-related API endpoints |

## Methods
| Method Name         | Inputs                                 | Return Type         | Access    | Description                                 |
|---------------------|----------------------------------------|---------------------|-----------|---------------------------------------------|
| registerUser        | UserRegistrationRequest                | Observable<UserResponse> | public    | Registers a new user via API                |

## Class Dependencies
| Class Name             | Usage Description                                 |
|-----------------------|---------------------------------------------------|
| HttpClient            | Used to make HTTP requests to the backend API      |
| UserRegistrationRequest | Used as the payload for registration requests     |
| UserResponse          | Used to type the successful registration response  |
| ErrorResponse         | Used to type error responses from the API          |
