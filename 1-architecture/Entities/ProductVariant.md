# Product Variant

## Description
The Product Variant entity represents a specific version of a product, such as a particular size or color. Each variant has its own SKU and inventory tracking.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the variant    |
| productId   | UUID     | Reference to the Product             |
| sku         | String   | Stock Keeping Unit (unique)          |
| attributes  | JSON     | Variant attributes (e.g., size, color)|
| price       | Decimal  | Price for this variant (optional)    |
| stock       | Integer  | Inventory count for this variant     |

## Business Rules & Relationships
- Each variant belongs to a product (N:1).
- SKU must be unique across all variants.
- Inventory is tracked per variant.
- Used in Cart, Order, and Inventory entities.
