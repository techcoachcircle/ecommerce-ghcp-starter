# UserRegistrationRequest

## Description
The `UserRegistrationRequest` is a TypeScript interface or class that defines the structure of the data sent to the backend API when registering a new user. It ensures type safety and consistency for the registration payload.

## Attributes
| Attribute | Data Type | Description                                 |
|-----------|-----------|---------------------------------------------|
| email     | string    | User's email address (unique)               |
| password  | string    | User's password (plain, validated in UI)    |
| name      | string    | Full name of the user                       |
| address   | string    | Shipping/billing address (optional)         |
| phone     | string    | Contact phone number (optional)             |
| role      | string    | User role (Customer, Seller, Admin)         |

## Methods
| Method Name | Inputs | Return Type | Access | Description |
|-------------|--------|-------------|--------|-------------|
| (none)      |        |             |        | Data model only |

## Class Dependencies
| Class Name | Usage Description |
|------------|------------------|
| (none)     | Standalone data model |
