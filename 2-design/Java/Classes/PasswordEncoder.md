# PasswordEncoder

## Description
`PasswordEncoder` is a utility/service class (often provided by Spring Security) used to hash and verify user passwords securely. It ensures that plain-text passwords are never stored in the database.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| (none)    |           | Stateless utility/service |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| encode(CharSequence rawPassword)         | CharSequence rawPassword | String | public | Hashes a plain-text password |
| matches(CharSequence rawPassword, String encodedPassword) | CharSequence rawPassword, String encodedPassword | boolean | public | Verifies a raw password against a hash |

## Class Dependencies
- None (stateless utility, but used by UserService).
