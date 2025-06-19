# Order Item

## Description
The Order Item entity represents a specific product variant purchased as part of an order, including quantity and price at the time of purchase.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the order item |
| orderId     | UUID     | Reference to the Order               |
| variantId   | UUID     | Reference to the Product Variant     |
| quantity    | Integer  | Number of units purchased            |
| price       | Decimal  | Price per unit at time of purchase   |

## Business Rules & Relationships
- Each order item belongs to an order (N:1).
- Each order item references a product variant.
- Quantity must be positive and not exceed available stock at purchase time.
- Price is captured at the time of purchase for consistency.
