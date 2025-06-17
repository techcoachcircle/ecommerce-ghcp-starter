package com.ghcp.starter.order_management.service;

import com.ghcp.starter.order_management.model.Order;
import com.ghcp.starter.order_management.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final PaymentServiceClient paymentServiceClient;

    public OrderService(OrderRepository orderRepository, PaymentServiceClient paymentServiceClient) {
        this.orderRepository = orderRepository;
        this.paymentServiceClient = paymentServiceClient;
    }

    public Order createOrder(Order order) {
        Order savedOrder = orderRepository.save(order);

        // Call Payment Service
        boolean paymentSuccess = true; //paymentServiceClient.processPayment(savedOrder.getId(), savedOrder.getTotalPrice());

        if (!paymentSuccess) {
            savedOrder.setStatus("Payment Failed");
        } else {
            savedOrder.setStatus("Paid");
        }

        return orderRepository.save(savedOrder);
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }
}