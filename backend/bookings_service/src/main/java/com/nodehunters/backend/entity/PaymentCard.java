package com.nodehunters.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_payment_card")
public class PaymentCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cardId;
    private String cardNumber;
    private String cardType;

    @ManyToOne(
        cascade = CascadeType.MERGE,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "app_user_id",
        referencedColumnName = "appUserId"
    )
    private AppUser appUser;

}
