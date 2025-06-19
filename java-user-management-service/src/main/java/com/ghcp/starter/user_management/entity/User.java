package com.ghcp.starter.user_management.entity;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class User {
    private UUID id;
    private String email;
    private String passwordHash;
    private String role;
    private LocalDateTime createdAt;
    private boolean isActive;
}
