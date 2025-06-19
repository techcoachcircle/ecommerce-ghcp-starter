# UserProfile

## Description
The `UserProfile` class encapsulates the profile information of a user, such as name, address, phone, avatar URL, and date of birth. It is used as a nested object within the `User` class.

## Attributes
| Name         | Type    | Description                                 |
|--------------|---------|---------------------------------------------|
| name         | str     | Full name of the user                       |
| address      | str     | User's address                              |
| phone        | str     | User's phone number                         |
| avatar_url   | str     | URL to the user's avatar image              |
| date_of_birth| str     | User's date of birth (YYYY-MM-DD)           |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| __init__            | name, address, phone, avatar_url, date_of_birth | None   | public    | Initializes the profile attributes                               |

## Class Dependencies
None (used as a value object in User).
