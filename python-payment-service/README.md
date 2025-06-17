## Setup

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Run Tests

```bash
pytest tests/
```

## Manually test the api

```bash
python payment_service.py
```

Use your favourite API client to POST the following data to `http://localhost:5000/payment`

```json
{
  "order_id":1,
  "amount":24
}

```