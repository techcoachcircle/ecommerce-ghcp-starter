# Product Category

## Description
The Product Category entity organizes products into logical groups, making it easier for customers to browse and search for items. Categories can have multiple subcategories.

## Attributes
| Attribute   | Data Type | Description                         |
|-------------|----------|-------------------------------------|
| id          | UUID     | Unique identifier for the category  |
| name        | String   | Name of the category                |
| description | String   | Description of the category         |

## Business Rules & Relationships
- Each category can have multiple subcategories (1:N).
- Products are linked to categories and subcategories.
- Category names must be unique.
- Used for product filtering and navigation.
