const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8082;

app.use(cors());
app.use(express.json());

app.post('/orders', (req, res) => {
  res.json({
    userId: 1,
    productId: 1,
    quantity: 3,
    totalPrice: 45
  });
});

app.get('/orders/1', (req, res) => {
    const response = {
        id: 1,
        userId: 1,
        productId: 1,
        quantity: 3,
        totalPrice: 45,
        status: 'Paid'
    }
    res.json(response);
});

app.post('/users/register', (req, res) => {

  res.json({
    "id": 101,
    "username": "newuser",
    "email": "newuser@example.com",
    "message": "Registration successful"
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});