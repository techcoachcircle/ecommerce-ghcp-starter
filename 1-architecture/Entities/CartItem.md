# Cart Item

## Description
The Cart Item entity represents a specific product variant added to a shopping cart, including quantity and pricing details.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the cart item  |
| cartId      | UUID     | Reference to the Shopping Cart       |
| variantId   | UUID     | Reference to the Product Variant     |
| quantity    | Integer  | Number of units added                |
| price       | Decimal  | Price per unit at time of addition   |

## Business Rules & Relationships
- Each cart item belongs to a shopping cart (N:1).
- Each cart item references a product variant.
- Quantity must be positive and not exceed available stock.
- Price is captured at the time of addition for consistency.
