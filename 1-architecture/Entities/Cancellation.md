# Cancellation

## Description
The Cancellation entity tracks order or order item cancellations, including the reason, initiator, and status.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the cancellation |
| orderId       | UUID     | Reference to the Order               |
| userId        | UUID     | Reference to the User (initiator)    |
| reason        | String   | Reason for cancellation              |
| status        | Enum     | Cancellation status (Pending, Completed, Rejected) |
| createdAt     | DateTime | Cancellation creation timestamp      |

## Business Rules & Relationships
- Each cancellation is linked to an order and user.
- Only eligible orders/items can be cancelled.
- Status must reflect the actual cancellation process.
- Used for customer service and inventory management.
