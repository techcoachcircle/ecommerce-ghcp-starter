package com.ghcp.starter.user_management.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class UserResponse {
    private UUID id;
    private String email;
    private String role;
    private LocalDateTime createdAt;
    private Profile profile;

    @Data
    @Builder
    public static class Profile {
        private String name;
        private String address;
        private String phone;
        private String avatarUrl;
        private String dateOfBirth;
    }
}
