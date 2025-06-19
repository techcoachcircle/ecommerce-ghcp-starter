# Promotion Banner

## Description
The Promotion Banner entity manages visual banners displayed on the storefront to advertise ongoing promotions, discounts, or campaigns.

## Attributes
| Attribute   | Data Type | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique identifier for the banner     |
| imageUrl    | String   | URL of the banner image              |
| linkUrl     | String   | URL to promotion or product page     |
| altText     | String   | Alternative text for accessibility   |
| startDate   | DateTime | Banner display start date            |
| endDate     | DateTime | Banner display end date              |
| isActive    | Boolean  | Banner active status                 |

## Business Rules & Relationships
- Only active banners within the date range are displayed.
- Banners are linked to promotions or product pages.
- Used for marketing and user engagement.
