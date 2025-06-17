package com.ghcp.starter.order_management.repository;


import com.ghcp.starter.order_management.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
