# Payment

## Description
The Payment entity records the details of a payment transaction for an order, including method, status, and reference information.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the payment    |
| orderId       | UUID     | Reference to the Order               |
| userId        | UUID     | Reference to the User                |
| amount        | Decimal  | Payment amount                       |
| method        | Enum     | Payment method (Card, PayPal, Wallet, etc.) |
| status        | Enum     | Payment status (Pending, Completed, Failed, Refunded) |
| transactionId | String   | External payment gateway reference   |
| createdAt     | DateTime | Payment creation timestamp           |

## Business Rules & Relationships
- Each payment is linked to an order (1:1).
- Payment status must reflect the actual transaction state.
- Refunds and cancellations are tracked via status.
- Linked to User and Order entities.
