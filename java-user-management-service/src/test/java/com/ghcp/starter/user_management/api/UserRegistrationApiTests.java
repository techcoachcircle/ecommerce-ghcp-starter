package com.ghcp.starter.user_management.api;

import com.ghcp.starter.user_management.repository.impl.InMemoryUserRepository;
import com.ghcp.starter.user_management.repository.impl.InMemoryUserProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("User Registration API Tests")
class UserRegistrationApiTests {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private InMemoryUserRepository userRepository;
    @Autowired
    private InMemoryUserProfileRepository userProfileRepository;

    @BeforeEach
    void clearRepositories() {
        userRepository.clear();
        userProfileRepository.clear();
    }

    @Nested
    @DisplayName("Positive Cases")
    class PositiveCases {
        @Test
        @DisplayName("Register user with valid data (Customer)")
        void registerUserWithValidData() throws Exception {
            String payload = """
                {"email":"user1@example.com","password":"Password1!","name":"John Doe","role":"Customer"}
            """;
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.email").value("user1@example.com"))
                    .andExpect(jsonPath("$.role").value("Customer"));
        }
        // ...add more positive cases (Seller, Admin, with/without optional fields)
    }

    @Nested
    @DisplayName("Negative Cases")
    class NegativeCases {
        @Test
        @DisplayName("Missing required fields (email)")
        void missingEmail() throws Exception {
            String payload = """
                {"password":"Password1!","name":"John Doe"}
            """;
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isBadRequest())
                    .andExpect(jsonPath("$.error").exists())
                    .andExpect(jsonPath("$.error").value("Email is required"));
        }

        @Test
        @DisplayName("Invalid email format")
        void invalidEmailFormat() throws Exception {
            String payload = """
                {"email":"not-an-email","password":"Password1!","name":"John Doe"}
            """;
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isBadRequest())
                    .andExpect(jsonPath("$.error").exists())
                    .andExpect(jsonPath("$.error").value("Invalid email format"));
        }

        @Test
        @DisplayName("Weak password (too short)")
        void weakPassword() throws Exception {
            String payload = """
                {"email":"user2@example.com","password":"123","name":"Jane Doe"}
            """;
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isBadRequest())
                    .andExpect(jsonPath("$.error").exists())
                    .andExpect(jsonPath("$.error").value("Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters"));
        }

        @Test
        @DisplayName("Duplicate email")
        void duplicateEmail() throws Exception {
            String payload = """
                {"email":"user1@example.com","password":"Password1!","name":"John Doe"}
            """;
            // First registration
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isCreated());
            // Duplicate registration
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isConflict())
                    .andExpect(jsonPath("$.error").exists())
                    .andExpect(jsonPath("$.error").value("Email already exists"));
        }
    }

    @Nested
    @DisplayName("Corner Cases")
    class CornerCases {
        @Test
        @DisplayName("Max length password (64 chars)")
        void maxLengthPassword() throws Exception {
            String longPassword = "A1" + "a".repeat(62);
            String payload = String.format("{\"email\":\"maxpass@example.com\",\"password\":\"%s\",\"name\":\"Max Pass\"}", longPassword);
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.email").value("maxpass@example.com"));
        }

        @Test
        @DisplayName("Invalid phone format")
        void invalidPhoneFormat() throws Exception {
            String payload = """
                {"email":"user3@example.com","password":"Password1!","name":"Jane Doe","phone":"abc123"}
            """;
            mockMvc.perform(post("/users/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(payload))
                    .andExpect(status().isUnprocessableEntity())
                    .andExpect(jsonPath("$.error").exists())
                    .andExpect(jsonPath("$.error").value("Invalid phone number format"));
        }
    }
}
