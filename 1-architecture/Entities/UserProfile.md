# User Profile

## Description
The User Profile entity stores personal and contact information for each user on the platform. It is used for personalization, shipping, and communication purposes.

## Attributes
| Attribute   | Data Type | Description                        |
|-------------|----------|------------------------------------|
| id          | UUID     | Unique identifier for the profile  |
| userId      | UUID     | Reference to the User entity       |
| name        | String   | Full name of the user              |
| address     | String   | Shipping/billing address           |
| phone       | String   | Contact phone number               |
| avatarUrl   | String   | URL to profile picture             |
| dateOfBirth | Date     | User's date of birth (optional)    |

## Business Rules & Relationships
- Each user has one user profile (1:1 relationship).
- User profile is required for placing orders and shipping.
- Phone and address must be valid for order delivery.
- Linked to User entity via userId.
