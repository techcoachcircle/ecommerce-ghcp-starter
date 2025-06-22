import re
from playwright.sync_api import Page, expect

# def test_has_title(page: Page):
#     page.goto("https://playwright.dev/")
#     page.get_by_label("Get started").click()

#     # Expect a title "to contain" a substring.

# GH Copilot code - starts

def fill_registration_form(page: Page, details: dict):
    if "email" in details:
        page.get_by_label("Email").fill(details["email"])
    if "password" in details:
        # Use role-based locator to avoid strict mode violation
        page.get_by_role("textbox", name="Password").fill(details["password"])
    if "name" in details:
        page.get_by_label("Full Name").fill(details["name"])
    if "address" in details:
        page.get_by_label("Address").fill(details["address"])
    if "phone" in details:
        page.get_by_label("Phone").fill(details["phone"])
    if "role" in details:
        # Streamlit uses a combobox for role selection
        role_input = page.get_by_label("Role")
        role_input.click()
        role_input.fill(details["role"])
        # Press Enter to select the typed role
        role_input.press("Enter")

def submit_registration(page: Page):
    page.get_by_role("button", name=re.compile("Register", re.I)).click()

def test_successful_registration_customer(page: Page):
    page.goto("http://localhost:8501/")
    fill_registration_form(page, {
        "email": "alice.smith@email.com",
        "password": "Passw0rd123!",
        "name": "Alice Smith",
        "address": "123 Main St, NY, USA",
        "phone": "+15551234567",
        "role": "Customer"
    })
    submit_registration(page)
    expect(page.get_by_text(re.compile("success", re.I))).to_be_visible()


def test_registration_duplicate_email(page: Page):
    page.goto("http://localhost:8501/")
    fill_registration_form(page, {
        "email": "alice.smith@email.com",
        "password": "NewPassw0rd!",
        "name": "Alice Smith"
    })
    submit_registration(page)
    expect(page.get_by_text("Email already exists")).to_be_visible()

def test_registration_weak_password(page: Page):
    page.goto("http://localhost:8501/")
    fill_registration_form(page, {
        "email": "weak.pass@email.com",
        "password": "1234567",
        "name": "Weak Pass"
    })
    submit_registration(page)
    expect(page.get_by_text("Password must")).to_be_visible()

def test_registration_invalid_email_format(page: Page):
    page.goto("http://localhost:8501/")
    fill_registration_form(page, {
        "email": "not-an-email",
        "password": "Passw0rd123!",
        "name": "Invalid User"
    })
    submit_registration(page)
    expect(page.get_by_text("Invalid email format")).to_be_visible()


def test_registration_invalid_phone_number(page: Page):
    page.goto("http://localhost:8501/")
    fill_registration_form(page, {
        "email": "phone.fail@email.com",
        "password": "Passw0rd123!",
        "name": "Phone Fail",
        "phone": "abc123"
    })
    submit_registration(page)
    expect(page.get_by_text("Invalid phone number format")).to_be_visible()

# GH Copilot code - end

