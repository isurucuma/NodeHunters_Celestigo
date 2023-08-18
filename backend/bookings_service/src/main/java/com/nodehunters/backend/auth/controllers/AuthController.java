package com.nodehunters.backend.auth.controllers;

import com.nodehunters.backend.auth.dto.LoginResponseDTO;
import com.nodehunters.backend.auth.dto.RegistrationDTO;
import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public AuthUser registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body){
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }
}
