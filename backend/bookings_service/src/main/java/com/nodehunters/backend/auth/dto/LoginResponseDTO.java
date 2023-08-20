package com.nodehunters.backend.auth.dto;

import com.nodehunters.backend.auth.models.AuthUser;

public class LoginResponseDTO {
    private AuthUser user;
    private String jwt;

    public LoginResponseDTO() {
        super();
    }

    public LoginResponseDTO(AuthUser user, String jwt) {
        this.user = user;
        this.jwt = jwt;
    }

    public AuthUser getUser() {
        return user;
    }

    public void setUser(AuthUser user) {
        this.user = user;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
