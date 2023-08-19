package com.nodehunters.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_payment_card")
public class PaymentCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cardId;
    private String cardNumber;
    private String cardType;

    @ManyToOne(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "app_user_id",
        referencedColumnName = "appUserId"
    )
    private AppUser appUser;

}
