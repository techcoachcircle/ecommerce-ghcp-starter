# Shipping Address

## Description
The Shipping Address entity stores the delivery address for an order, ensuring accurate and timely shipment of products to customers.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the address    |
| userId      | UUID     | Reference to the User                |
| orderId     | UUID     | Reference to the Order               |
| address     | String   | Full shipping address                |
| city        | String   | City                                 |
| state       | String   | State/Province                       |
| postalCode  | String   | Postal/ZIP code                      |
| country     | String   | Country                              |
| phone       | String   | Contact phone number                 |

## Business Rules & Relationships
- Each shipping address is linked to a user and an order.
- Address must be valid for successful delivery.
- Users can have multiple saved addresses.
- Used for shipping calculation and order fulfillment.
