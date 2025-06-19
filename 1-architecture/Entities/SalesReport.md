# Sales Report

## Description
The Sales Report entity aggregates and presents sales data for analysis, helping sellers and admins track performance and trends over time.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the report     |
| sellerId      | UUID     | Reference to the Seller (User)       |
| periodStart   | DateTime | Start of reporting period            |
| periodEnd     | DateTime | End of reporting period              |
| totalSales    | Decimal  | Total sales amount                   |
| totalOrders   | Integer  | Number of orders                     |
| generatedAt   | DateTime | Report generation timestamp          |

## Business Rules & Relationships
- Reports are generated for specific periods (daily, weekly, monthly).
- Linked to Seller (User) and Order entities.
- Used for analytics and business decision-making.
