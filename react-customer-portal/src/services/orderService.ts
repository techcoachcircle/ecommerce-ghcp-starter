export type OrderRequest = {
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
};

export type OrderResponse = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  status: string;
};

export async function createOrder(order: OrderRequest): Promise<OrderResponse> {
  const response = await fetch("http://localhost:8080/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!response.ok) throw new Error("Failed to create order");
  return response.json();
}
