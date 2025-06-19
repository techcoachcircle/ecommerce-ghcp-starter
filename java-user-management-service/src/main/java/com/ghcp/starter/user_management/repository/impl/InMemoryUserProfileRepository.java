package com.ghcp.starter.user_management.repository.impl;

import com.ghcp.starter.user_management.entity.UserProfile;
import com.ghcp.starter.user_management.repository.UserProfileRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.UUID;

@Repository
public class InMemoryUserProfileRepository implements UserProfileRepository {
    private final Map<UUID, UserProfile> profiles = new ConcurrentHashMap<>();

    @Override
    public UserProfile save(UserProfile profile) {
        profiles.put(profile.getUserId(), profile);
        return profile;
    }

    @Override
    public Optional<UserProfile> findByUserId(UUID userId) {
        return Optional.ofNullable(profiles.get(userId));
    }

    public void clear() {
        profiles.clear();
    }
}
