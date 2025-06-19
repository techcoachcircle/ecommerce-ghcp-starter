# Shopping Cart

## Description
The Shopping Cart entity represents a temporary collection of products that a customer intends to purchase. It persists across sessions and is linked to a user or session.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the cart       |
| userId      | UUID     | Reference to the User (nullable)     |
| sessionId   | String   | Session identifier (for guests)      |
| createdAt   | DateTime | Cart creation timestamp              |
| updatedAt   | DateTime | Last update timestamp                |

## Business Rules & Relationships
- Each user can have only one active cart.
- Guest users are tracked by sessionId.
- Linked to Cart Items (1:N).
- Cart is cleared upon successful order placement.
- Discounts and promotions can be applied to the cart.
