# Contact Inquiry

## Description
The Contact Inquiry entity captures messages sent by users or visitors through the contact form, enabling follow-up and communication.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the inquiry    |
| name        | String   | Name of the sender                   |
| email       | String   | Email address of the sender          |
| message     | String   | Message content                      |
| createdAt   | DateTime | Inquiry creation timestamp           |
| isHandled   | Boolean  | Indicates if the inquiry was handled |

## Business Rules & Relationships
- All inquiries are reviewed by support staff.
- Used for customer communication and feedback.
- Not directly linked to other entities but may result in a Support Ticket.
