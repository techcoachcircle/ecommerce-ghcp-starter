# Analytics Report

## Description
The Analytics Report entity provides insights into user behavior, product performance, and platform usage, supporting data-driven decisions.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the report     |
| type          | String   | Type of analytics (traffic, sales, etc.) |
| data          | JSON     | Analytics data payload               |
| generatedAt   | DateTime | Report generation timestamp          |

## Business Rules & Relationships
- Reports are generated for specific metrics and periods.
- Used by admins and sellers for platform optimization.
- May aggregate data from multiple entities (Orders, Users, Products).
