# Tracking Information

## Description
The Tracking Information entity stores shipment tracking details for orders, enabling customers to monitor delivery status.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the tracking   |
| orderId       | UUID     | Reference to the Order               |
| carrier       | String   | Shipping carrier name                |
| trackingNumber| String   | Carrier-provided tracking number     |
| status        | String   | Current shipment status              |
| estimatedDelivery | Date  | Estimated delivery date              |
| updatedAt     | DateTime | Last update timestamp                |

## Business Rules & Relationships
- Each tracking record is linked to an order.
- Status and estimated delivery are updated by shipping integrations.
- Used for customer notifications and support.
