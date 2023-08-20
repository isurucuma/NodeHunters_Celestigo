package com.nodehunters.backend.repository;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.entity.AppUser;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    public AppUser findByAuthUser(AuthUser authUser);


}
