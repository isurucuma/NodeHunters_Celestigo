package com.nodehunters.backend.entity;

import com.nodehunters.backend.auth.models.AuthUser;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_app_user")
public class AppUser {
    @Id
    private Long id;

    @OneToOne
    private AuthUser authUser;

    private String cosmicId;

    @OneToOne
    private PaymentCard paymentCard;

}
