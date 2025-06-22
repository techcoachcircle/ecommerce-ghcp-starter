# GH Copilot code - starts
import streamlit as st
import requests

st.title("User Registration - ShopSphere")

API_URL = "http://localhost:8081/users/register"

def register_user(payload):
    try:
        response = requests.post(API_URL, json=payload)
        return response
    except Exception as e:
        return None

def main():
    st.header("Register a New User")
    with st.form("registration_form"):
        email = st.text_input("Email")
        password = st.text_input("Password", type="password")
        name = st.text_input("Full Name")
        address = st.text_input("Address")
        phone = st.text_input("Phone")
        role = st.selectbox("Role", ["Customer", "Seller", "Admin"])
        submit = st.form_submit_button("Register")

    if submit:
        payload = {
            "email": email,
            "password": password,
            "name": name,
            "address": address if address else None,
            "phone": phone if phone else None,
            "role": role
        }
        # Remove None values
        payload = {k: v for k, v in payload.items() if v is not None}
        response = register_user(payload)
        if response is None:
            st.error("Could not connect to the API.")
        elif response.status_code == 201:
            st.success("User registered successfully!")
            st.json(response.json())
        else:
            data = response.json()
            st.error(f"Error: {data.get('error')}")
            st.write(data.get('message'))

if __name__ == "__main__":
    main()
# GH Copilot code - end
