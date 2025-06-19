# Refund

## Description
The Refund entity records details of refunds issued for orders or order items, including reason, amount, and status.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the refund     |
| orderId       | UUID     | Reference to the Order               |
| paymentId     | UUID     | Reference to the Payment             |
| amount        | Decimal  | Refund amount                        |
| reason        | String   | Reason for the refund                |
| status        | Enum     | Refund status (Pending, Completed, Rejected) |
| createdAt     | DateTime | Refund creation timestamp            |

## Business Rules & Relationships
- Each refund is linked to an order and payment.
- Refund amount cannot exceed original payment.
- Status must reflect the actual refund process.
- Used for customer service and accounting.
