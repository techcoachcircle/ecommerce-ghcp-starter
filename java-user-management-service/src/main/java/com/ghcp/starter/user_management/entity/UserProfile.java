package com.ghcp.starter.user_management.entity;

import lombok.Data;
import java.util.UUID;

@Data
public class UserProfile {
    private UUID id;
    private UUID userId;
    private String name;
    private String address;
    private String phone;
}
