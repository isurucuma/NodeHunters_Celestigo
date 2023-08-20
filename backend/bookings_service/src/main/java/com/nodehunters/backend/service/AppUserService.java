package com.nodehunters.backend.service;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.entity.AppUser;
import com.nodehunters.backend.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {
    @Autowired
    private AppUserRepository appUserRepository;

    public AppUser getAppUser(AuthUser authUser){
        return appUserRepository.findByAuthUser(authUser);
    }
}
