package com.ghcp.starter.user_management.dto;

import lombok.Data;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Data
public class UserRegistrationRequest {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, max = 64)
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()_+\\-=]{8,64}$")
    private String password;

    @NotBlank
    private String name;

    private String address;

    @Pattern(regexp = "^\\+?[0-9\\- ]{7,20}$")
    private String phone;

    private String role = "Customer";
}
