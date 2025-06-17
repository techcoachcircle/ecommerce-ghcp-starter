package com.ghcp.starter.order_management.api;


import com.ghcp.starter.order_management.model.Order;
import com.ghcp.starter.order_management.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OrderIntegrationTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    void testCreateOrderAPI() {
        Order order = new Order(1L, 1, 1000.0);
        ResponseEntity<Order> response = restTemplate.postForEntity("/orders", order, Order.class);

        // Add assertions to verify the response
        
    }

    @Test
    void testFetchOrderAPI() {
        Order order = new Order(1L, 1, 800.0);
        Order savedOrder = orderRepository.save(order);

        ResponseEntity<Order> response = restTemplate.getForEntity("/orders/" + savedOrder.getId(), Order.class);

        // Add assertions to verify the response
        
    }
}