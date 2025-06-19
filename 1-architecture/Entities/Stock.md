# Stock / Inventory

## Description
The Stock (Inventory) entity tracks the available quantity of each product variant, ensuring accurate order fulfillment and stock management.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the inventory  |
| variantId   | UUID     | Reference to the Product Variant     |
| quantity    | Integer  | Current stock level                  |
| updatedAt   | DateTime | Last update timestamp                |

## Business Rules & Relationships
- Each inventory record is linked to a product variant (1:1).
- Quantity must be updated on purchase, restock, or return.
- Used for order validation and low stock notifications.
