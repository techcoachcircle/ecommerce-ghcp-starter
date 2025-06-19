# Promotion / Discount

## Description
The Promotion (Discount) entity defines special offers, discount codes, and promotional campaigns that can be applied to products, carts, or orders.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the promotion  |
| code          | String   | Discount code (if applicable)        |
| description   | String   | Description of the promotion         |
| type          | Enum     | Type (percentage, fixed, BOGO, etc.) |
| value         | Decimal  | Discount value                       |
| startDate     | DateTime | Promotion start date                 |
| endDate       | DateTime | Promotion end date                   |
| isActive      | Boolean  | Promotion active status              |
| usageLimit    | Integer  | Max number of uses (optional)        |
| minOrderValue | Decimal  | Minimum order value to apply         |

## Business Rules & Relationships
- Promotions can be applied to products, carts, or orders.
- Only active promotions within the date range are valid.
- Usage limits and minimum order values are enforced.
- Linked to Orders, Cart, and Product entities.
