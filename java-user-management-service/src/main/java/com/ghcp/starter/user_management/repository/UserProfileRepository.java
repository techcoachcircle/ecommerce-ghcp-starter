package com.ghcp.starter.user_management.repository;

import com.ghcp.starter.user_management.entity.UserProfile;
import java.util.Optional;
import java.util.UUID;

public interface UserProfileRepository {
    UserProfile save(UserProfile profile);
    Optional<UserProfile> findByUserId(UUID userId);
}
