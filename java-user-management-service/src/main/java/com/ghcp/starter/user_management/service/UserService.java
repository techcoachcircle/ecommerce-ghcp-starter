package com.ghcp.starter.user_management.service;

import com.ghcp.starter.user_management.dto.UserRegistrationRequest;
import com.ghcp.starter.user_management.dto.UserResponse;
import com.ghcp.starter.user_management.entity.User;
import com.ghcp.starter.user_management.entity.UserProfile;
import com.ghcp.starter.user_management.repository.UserRepository;
import com.ghcp.starter.user_management.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserProfileRepository userProfileRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserResponse registerUser(UserRegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        User user = new User();
        user.setId(UUID.randomUUID());
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole() != null ? request.getRole() : "Customer");
        user.setCreatedAt(LocalDateTime.now());
        user.setActive(true);
        userRepository.save(user);

        UserProfile profile = new UserProfile();
        profile.setId(UUID.randomUUID());
        profile.setUserId(user.getId());
        profile.setName(request.getName());
        profile.setAddress(request.getAddress());
        profile.setPhone(request.getPhone());
        userProfileRepository.save(profile);

        return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .role(user.getRole())
                .createdAt(user.getCreatedAt())
                .profile(UserResponse.Profile.builder()
                        .name(profile.getName())
                        .address(profile.getAddress())
                        .phone(profile.getPhone())
                        .build())
                .build();
    }
}
