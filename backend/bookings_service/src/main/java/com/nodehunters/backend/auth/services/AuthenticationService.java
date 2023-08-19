package com.nodehunters.backend.auth.services;

import com.nodehunters.backend.auth.dto.LoginResponseDTO;
import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.models.Role;
import com.nodehunters.backend.auth.repository.RoleRepository;
import com.nodehunters.backend.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public AuthUser registerUser(String email, String userName, String password){
        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();
        Set<Role> authorities = new HashSet<>();
        authorities.add(userRole);
        return userRepository.save(new AuthUser(0, email, userName, encodedPassword, authorities));
    }

    // user tries to log in by entering the username and the password
    // controller will pass the password and the username to this method
    public LoginResponseDTO loginUser(String email, String password){
        try{
            // authenticationManager will try to authenticate the user by using the username and the password
            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
            // if the authentication is successful then auth will contain the user details including the username,roles, etc
            // generate the jwt token
            String token = tokenService.generateJwt(auth);
            return new LoginResponseDTO(userRepository.findByEmail(email).orElse(null), token);
        }catch(AuthenticationException e){
            return new LoginResponseDTO(null, "");
        }
    }
}
