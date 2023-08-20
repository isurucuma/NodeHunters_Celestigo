package com.nodehunters.backend.entity;

import com.nodehunters.backend.auth.models.AuthUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_app_user")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appUserId;

    @OneToOne(
        cascade = CascadeType.MERGE,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "auth_user_id",
        referencedColumnName = "userId"
    )
    private AuthUser authUser;

    private String cosmicId;

    @OneToMany(
        cascade = CascadeType.MERGE,
        fetch = FetchType.EAGER,
        mappedBy = "appUser"
    )
    private List<PaymentCard> paymentCards;

    @OneToMany(
        cascade = CascadeType.MERGE,
        fetch = FetchType.LAZY,
        mappedBy = "appUser"
    )
    private List<Booking> bookings;

    @CreationTimestamp
    private Instant createdAt;

    @UpdateTimestamp
    private Instant updatedAt;

}
