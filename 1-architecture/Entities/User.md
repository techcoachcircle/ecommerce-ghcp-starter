# User

## Description
The User entity represents any individual who interacts with the ShopSphere platform. Users can have different roles such as Customer, Seller, or Admin, and their profile information is stored and managed for authentication, authorization, and personalization purposes.

## Attributes
| Attribute      | Data Type   | Description                       |
|---------------|------------|-----------------------------------|
| id            | UUID        | Unique identifier for the user    |
| email         | String      | User's email address (unique)     |
| passwordHash  | String      | Hashed password                   |
| role          | Enum        | User role (Customer/Seller/Admin) |
| createdAt     | DateTime    | Account creation timestamp        |
| updatedAt     | DateTime    | Last profile update timestamp     |
| isActive      | Boolean     | Account active status             |

## Business Rules & Relationships
- Each user must have a unique email address.
- Passwords are stored as hashes for security.
- A user can have one or more roles (RBAC).
- Users are related to User Profile (1:1), Orders (1:N), Reviews (1:N), and Shopping Cart (1:1).
- Admin users have elevated permissions for management tasks.
- Sellers can manage products and view sales reports.
- Customers can place orders and write reviews.
