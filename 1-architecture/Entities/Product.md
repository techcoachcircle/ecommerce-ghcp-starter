# Product

## Description
The Product entity represents an item available for sale on the ShopSphere platform. It contains all relevant information about the item, including its details, pricing, and categorization.

## Attributes
| Attribute      | Data Type | Description                          |
|----------------|----------|--------------------------------------|
| id             | UUID     | Unique identifier for the product    |
| name           | String   | Name of the product                  |
| description    | String   | Detailed description                 |
| price          | Decimal  | Base price of the product            |
| categoryId     | UUID     | Reference to Product Category        |
| subcategoryId  | UUID     | Reference to Product Subcategory     |
| sellerId       | UUID     | Reference to Seller (User)           |
| createdAt      | DateTime | Product creation timestamp           |
| updatedAt      | DateTime | Last update timestamp                |
| isActive       | Boolean  | Product availability status          |

## Business Rules & Relationships
- Each product belongs to a category and subcategory.
- Each product is managed by a seller (User with Seller role).
- Products can have multiple variants and images.
- Only active products are visible to customers.
- Linked to Inventory, Reviews, Promotions, and Orders.
