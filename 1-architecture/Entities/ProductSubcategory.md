# Product Subcategory

## Description
The Product Subcategory entity further refines product organization within a parent category, allowing for more granular filtering and navigation.

## Attributes
| Attribute   | Data Type | Description                           |
|-------------|----------|---------------------------------------|
| id          | UUID     | Unique identifier for the subcategory |
| categoryId  | UUID     | Reference to parent Product Category  |
| name        | String   | Name of the subcategory               |
| description | String   | Description of the subcategory        |

## Business Rules & Relationships
- Each subcategory belongs to one category (N:1).
- Products are linked to subcategories.
- Subcategory names must be unique within a category.
