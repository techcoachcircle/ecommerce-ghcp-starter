

## Step - 1 : Start the applications to test

### Start the API server

```bash
cd ..
cd python-user-management-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python user_registration_api.py
```

### Start the UI

Open a new terminal

```bash
venv\Scripts\activate
streamlit run user_registration_ui.py
```


## Step - 2: Run the test suite
Open a new terminal to run end-end tests

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
playwright install
```

After this, anytime you want to run tests, you can use this command:

```bash
run-all-tests.cmd
```

Open the `end-end-tests/html-test-report/index.html` in your browser to see the test report