package com.ghcp.starter.user_management.repository;

import com.ghcp.starter.user_management.entity.User;
import java.util.Optional;

public interface UserRepository {
    boolean existsByEmail(String email);
    User save(User user);
    Optional<User> findByEmail(String email);
}
