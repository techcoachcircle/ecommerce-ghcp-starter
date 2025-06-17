
## Running Tests

```bash
mvn test
```


## Testing the API Manually

```bash
mvn spring-boot:run
```

Use your favourite API client to call `http://localhost:8080/orders`

With the following sample request data:

```json
{
  "userId": 1,
  "productId": 1,
  "quantity": 3,
  "totalPrice": 45
}
```