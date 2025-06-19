# Product Image

## Description
The Product Image entity stores URLs and metadata for images associated with products and their variants, enhancing the visual presentation in the storefront.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the image      |
| productId   | UUID     | Reference to the Product             |
| variantId   | UUID     | Reference to the Product Variant     |
| url         | String   | URL of the image                     |
| altText     | String   | Alternative text for accessibility   |
| isPrimary   | Boolean  | Indicates if this is the main image  |

## Business Rules & Relationships
- Each image is linked to a product and/or variant.
- Each product should have at least one image.
- Only one image per product/variant can be marked as primary.
- Used for product display in the storefront and admin dashboard.
