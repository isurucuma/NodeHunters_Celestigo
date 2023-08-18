package com.nodehunters.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_payment_card")
public class PaymentCard {
    @Id
    private Long id;
    private String cardNumber;
    private String cardType;

    @ManyToOne(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "app_user_id",
        referencedColumnName = "id"
    )
    private AppUser  appUser;

}
