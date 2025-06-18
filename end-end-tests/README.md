## Setup the environment

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
playwright install
```

```bash
pytest -s -v --headed ​​--html=html-test-report/index.html --capture=tee-sys --screenshot=only-on-failure
```