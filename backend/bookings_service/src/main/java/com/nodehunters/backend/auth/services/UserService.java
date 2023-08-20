package com.nodehunters.backend.auth.services;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.repository.UserRepository;
import com.nodehunters.backend.entity.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {// specify on how the spring security will look for user details
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("In the user details service");
        return userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public AuthUser getAuthUser(String email){
        Optional<AuthUser> user = userRepository.findByEmail(email);
        return user.get();
    }
}
