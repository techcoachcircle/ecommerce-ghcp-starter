import React, { useState } from "react";
import { createOrder, type OrderRequest, type OrderResponse } from "../../services/orderService";

const OrderCreator: React.FC = () => {
  const [form, setForm] = useState<OrderRequest>({
    userId: 1,
    productId: 1,
    quantity: 1,
    totalPrice: 0,
  });
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "userId" || name === "productId" || name === "quantity"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOrder(null);
    try {
      const data = await createOrder(form);
      setOrder(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID: </label>
          <input
            type="number"
            name="userId"
            value={form.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product ID: </label>
          <input
            type="number"
            name="productId"
            value={form.productId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            min={1}
          />
        </div>
        <div>
          <label>Total Price: </label>
          <input
            type="number"
            name="totalPrice"
            value={form.totalPrice}
            onChange={handleChange}
            required
            min={0}
            step={0.01}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Order"}
        </button>
      </form>
      {order && (
        <div style={{ marginTop: "1em", color: "green" }}>
          <strong>Order created successfully!</strong>
          <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ marginTop: "1em", color: "red" }}>
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default OrderCreator;
        