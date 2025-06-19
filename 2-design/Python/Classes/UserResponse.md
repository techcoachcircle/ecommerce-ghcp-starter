# UserResponse

## Description
The `UserResponse` class defines the schema for the response returned upon successful user registration. It formats the user data as per the API specification, including user id, email, role, creation date, and profile information.

## Attributes
| Name       | Type         | Description                                 |
|------------|--------------|---------------------------------------------|
| id         | str (UUID)   | Unique identifier for the user              |
| email      | str          | User's email address                        |
| role       | str          | User's role (Customer, Seller, Admin)       |
| created_at | str (ISO8601)| Account creation timestamp                  |
| profile    | dict         | User's profile information                  |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| from_user           | user: User                            | UserResponse     | public    | Creates a response object from a User entity                     |

## Class Dependencies
- **User**: Used to extract user data for the response.
- **UserProfile**: Used to extract profile data for the response.
