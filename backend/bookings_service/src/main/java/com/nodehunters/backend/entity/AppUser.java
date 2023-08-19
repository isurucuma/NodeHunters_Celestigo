package com.nodehunters.backend.entity;

import com.nodehunters.backend.auth.models.AuthUser;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tbl_app_user")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appUserId;

    @OneToOne(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "auth_user_id",
        referencedColumnName = "userId"
    )
    private AuthUser authUser;

    private String cosmicId;

    @OneToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.EAGER,
        mappedBy = "appUser"
    )
    private List<PaymentCard> paymentCards;

    @OneToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY,
        mappedBy = "appUser"
    )
    private List<Booking> bookings;

}
