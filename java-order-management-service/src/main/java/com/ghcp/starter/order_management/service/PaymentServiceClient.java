package com.ghcp.starter.order_management.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PaymentServiceClient {

    private final RestTemplate restTemplate = new RestTemplate();

    public boolean processPayment(Long orderId, double amount) {
        String paymentUrl = "http://localhost:5000/payment";
        PaymentRequest request = new PaymentRequest(orderId, amount);
        
        try {
            PaymentResponse response = restTemplate.postForObject(paymentUrl, request, PaymentResponse.class);
            return response != null && response.isSuccess();
        } catch (Exception e) {
            return false; // Simulate payment failure handling
        }
    }

    private static class PaymentRequest {
        public Long orderId;
        public double amount;
        public PaymentRequest(Long orderId, double amount) {
            this.orderId = orderId;
            this.amount = amount;
        }
    }

    private static class PaymentResponse {
        public boolean success;
        public boolean isSuccess() { return success; }
    }
}