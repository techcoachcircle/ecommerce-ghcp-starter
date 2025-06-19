package com.ghcp.starter.user_management.service;

import com.ghcp.starter.user_management.dto.UserRegistrationRequest;
import com.ghcp.starter.user_management.dto.UserResponse;
import com.ghcp.starter.user_management.repository.UserRepository;
import com.ghcp.starter.user_management.repository.UserProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private UserProfileRepository userProfileRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private EmailService emailService;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void registerUser_success() {
        UserRegistrationRequest req = new UserRegistrationRequest();
        req.setEmail("test@example.com");
        req.setPassword("Password1!");
        req.setName("Test User");
        when(userRepository.existsByEmail("test@example.com")).thenReturn(false);
        when(passwordEncoder.encode(any())).thenReturn("encoded");
        UserResponse res = userService.registerUser(req);
        assertEquals("test@example.com", res.getEmail());
        assertEquals("Customer", res.getRole());
        assertNotNull(res.getId());
        verify(userRepository).save(any());
        verify(userProfileRepository).save(any());
        verify(emailService, atLeastOnce()).sendRegistrationConfirmation(any(), any());
    }
}
