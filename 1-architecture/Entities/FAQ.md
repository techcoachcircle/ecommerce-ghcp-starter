# FAQ

## Description
The FAQ entity stores frequently asked questions and their answers, helping users quickly find information and reducing support requests.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the FAQ        |
| question    | String   | The question text                    |
| answer      | String   | The answer text                      |
| isActive    | Boolean  | Indicates if the FAQ is visible      |
| createdAt   | DateTime | FAQ creation timestamp               |

## Business Rules & Relationships
- Only active FAQs are displayed to users.
- FAQs are managed by admins.
- Used in the customer support section.
