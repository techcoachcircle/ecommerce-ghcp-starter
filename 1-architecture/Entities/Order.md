# Order

## Description
The Order entity represents a completed purchase transaction by a customer, including all relevant details such as items, payment, shipping, and status.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the order      |
| userId        | UUID     | Reference to the User                |
| status        | Enum     | Order status (Pending, Paid, Shipped, Delivered, Cancelled, Refunded) |
| totalAmount   | Decimal  | Total order amount                   |
| paymentId     | UUID     | Reference to Payment                 |
| shippingId    | UUID     | Reference to Shipping Address        |
| createdAt     | DateTime | Order creation timestamp             |
| updatedAt     | DateTime | Last update timestamp                |

## Business Rules & Relationships
- Each order is placed by a user (N:1).
- Linked to Order Items (1:N), Payment, and Shipping Address.
- Status transitions follow business workflow.
- Orders can be refunded or cancelled under certain conditions.
