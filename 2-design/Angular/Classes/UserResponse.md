# UserResponse

## Description
The `UserResponse` is a TypeScript interface or class that defines the structure of the data returned by the backend API upon successful user registration. It includes user details and profile information.

## Attributes
| Attribute   | Data Type      | Description                                 |
|-------------|---------------|---------------------------------------------|
| id          | string (UUID)  | Unique identifier for the user              |
| email       | string         | User's email address                        |
| role        | string         | User role (Customer, Seller, Admin)         |
| createdAt   | string (date)  | Account creation timestamp                  |
| profile     | UserProfile    | User's profile information                  |

## Methods
| Method Name | Inputs | Return Type | Access | Description |
|-------------|--------|-------------|--------|-------------|
| (none)      |        |             |        | Data model only |

## Class Dependencies
| Class Name   | Usage Description                |
|--------------|----------------------------------|
| UserProfile  | Used for nested profile details  |
