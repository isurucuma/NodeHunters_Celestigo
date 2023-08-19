package com.nodehunters.backend.auth.models;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class AuthUser implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;

    private String name;

    @Column(unique = true)
    private String email;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER) // as soon as we fetch the user, we fetch the roles immediately
    // @JoinTable is used to specify the name of the junction table and the columns that will be used to join the two tables
    // @ This is used in a many to many relationship
    @JoinTable(
            name = "user_role_junction",
            joinColumns = {@JoinColumn(name = "user_id")}, // column corresponds to this table
            inverseJoinColumns = {@JoinColumn(name = "role_id")} // column corresponds to the other table
    )
    private Set<Role> authorities;

    public Integer getUserId() {
        return userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setName(String username) {
        this.name = username;
    }

    public String getName() {
        return this.name;
    }

    public AuthUser(Integer userId, String email, String name, String password, Set<Role> authorities) {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.password = password;
        this.authorities = authorities;
    }

    public AuthUser(){
        super();
        this.authorities = new HashSet<>();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
