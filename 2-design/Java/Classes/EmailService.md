# EmailService

## Description
`EmailService` is a service class responsible for sending emails, such as registration confirmations or password reset links, to users. It abstracts the email sending logic from the business layer.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| (none)    |           | Typically stateless, may have configuration fields |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| sendRegistrationConfirmation(String email, String name) | String email, String name | void | public | Sends a registration confirmation email to the user |
| sendPasswordReset(String email, String resetLink)       | String email, String resetLink | void | public | Sends a password reset email with a secure link |

## Class Dependencies
- None (may use JavaMailSender or similar under the hood).
