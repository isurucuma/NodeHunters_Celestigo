package com.nodehunters.backend.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistrationDTO {
    private String name;
    private String email;
    private String password;

    @Override
    public String toString() {
        return "RegistrationDTO{" +
                "userName='" + name + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
