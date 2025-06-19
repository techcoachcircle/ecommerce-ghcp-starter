# Review / Rating

## Description
The Review (Rating) entity allows customers to provide feedback and ratings for products they have purchased, helping other users make informed decisions.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the review     |
| userId      | UUID     | Reference to the User                |
| productId   | UUID     | Reference to the Product             |
| rating      | Integer  | Rating value (e.g., 1-5 stars)       |
| comment     | String   | Review text                          |
| createdAt   | DateTime | Review creation timestamp            |
| isApproved  | Boolean  | Moderation status                    |

## Business Rules & Relationships
- Only users who purchased a product can leave a review.
- Each user can review a product only once per order.
- Reviews are moderated before being published.
- Linked to User and Product entities.
