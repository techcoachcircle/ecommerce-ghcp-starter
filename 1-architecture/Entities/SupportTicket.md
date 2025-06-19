# Support Ticket

## Description
The Support Ticket entity tracks customer inquiries, issues, or requests for assistance, enabling efficient support and resolution.

## Attributes
| Attribute     | Data Type | Description                          |
|---------------|----------|--------------------------------------|
| id            | UUID     | Unique identifier for the ticket     |
| userId        | UUID     | Reference to the User                |
| subject       | String   | Ticket subject or summary            |
| description   | String   | Detailed description of the issue    |
| status        | Enum     | Ticket status (Open, In Progress, Resolved, Closed) |
| createdAt     | DateTime | Ticket creation timestamp            |
| updatedAt     | DateTime | Last update timestamp                |

## Business Rules & Relationships
- Each ticket is linked to a user (N:1).
- Status transitions follow support workflow.
- Used by support staff to manage and resolve issues.
