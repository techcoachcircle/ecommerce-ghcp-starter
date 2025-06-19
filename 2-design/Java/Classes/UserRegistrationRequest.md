# UserRegistrationRequest

## Description
`UserRegistrationRequest` is a Data Transfer Object (DTO) representing the payload sent by the client to register a new user. It encapsulates all required and optional fields for user registration.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| email     | String    | User's email address (unique) |
| password  | String    | User's password (plain, to be hashed) |
| name      | String    | Full name of the user |
| address   | String    | Shipping/billing address (optional) |
| phone     | String    | Contact phone number (optional) |
| role      | String    | User role (Customer, Seller, Admin) |

## Methods
| Method Signature         | Input(s) | Return Type | Access | Description |
|-------------------------|----------|-------------|--------|-------------|
| Getters/Setters         | -        | -           | public | Standard JavaBean accessors for all fields |

## Class Dependencies
- None (pure DTO, but used by controller and service).
