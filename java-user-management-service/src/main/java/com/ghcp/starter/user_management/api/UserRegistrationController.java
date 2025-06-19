package com.ghcp.starter.user_management.api;

import com.ghcp.starter.user_management.dto.UserRegistrationRequest;
import com.ghcp.starter.user_management.dto.UserResponse;
import com.ghcp.starter.user_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import org.springframework.web.bind.MethodArgumentNotValidException;
import com.ghcp.starter.user_management.dto.ErrorResponse;

@RestController
@RequestMapping("/users")
public class UserRegistrationController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> registerUser(@Valid @RequestBody UserRegistrationRequest request) {
        UserResponse response = userService.registerUser(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException ex) {
        String error = ex.getBindingResult().getFieldErrors().stream()
                .map(fieldError -> {
                    switch (fieldError.getField()) {
                        case "email":
                            return fieldError.getRejectedValue() == null ? "Email is required" : "Invalid email format";
                        case "password":
                            return "Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters";
                        case "phone":
                            return "Invalid phone number format";
                        default:
                            return fieldError.getDefaultMessage();
                    }
                })
                .findFirst().orElse("Invalid request");
        ErrorResponse response = new ErrorResponse(error, error);
        // Return 422 for phone, 400 for others
        boolean phoneError = ex.getBindingResult().getFieldErrors().stream().anyMatch(f -> f.getField().equals("phone"));
        return ResponseEntity.status(phoneError ? 422 : 400).body(response);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException ex) {
        if (ex.getMessage() != null && ex.getMessage().contains("Email already exists")) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ErrorResponse("Email already exists", "Email already exists"));
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse("ServerError", ex.getMessage()));
    }
}
