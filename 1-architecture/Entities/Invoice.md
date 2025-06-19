# Invoice

## Description
The Invoice entity documents the financial transaction for an order, providing a formal record for both the customer and the seller.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the invoice    |
| orderId       | UUID     | Reference to the Order               |
| userId        | UUID     | Reference to the User                |
| amount        | Decimal  | Total invoice amount                 |
| issuedAt      | DateTime | Invoice issue date                   |
| dueDate       | DateTime | Payment due date                     |
| status        | Enum     | Invoice status (Issued, Paid, Overdue, Cancelled) |

## Business Rules & Relationships
- Each invoice is linked to an order (1:1).
- Invoice status must reflect payment and order state.
- Used for accounting and customer reference.
