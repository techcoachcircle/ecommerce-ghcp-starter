## Setup the environment

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
playwright install
```

## Run the test suite
```bash
pytest -s -v --headed ​​--html=html-test-report/index.html --capture=tee-sys --screenshot=only-on-failure
```