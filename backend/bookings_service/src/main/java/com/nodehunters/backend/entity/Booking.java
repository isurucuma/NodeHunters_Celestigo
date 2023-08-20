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
@Table(name = "tbl_booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(nullable = false)
    private String bookingClass;

    @Column(nullable = false)
    private int numberOfSeats;

    @Column(nullable = false)
    private String bookedDateTime;

    @ManyToOne(
        cascade = CascadeType.MERGE,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "tour_id",
        referencedColumnName = "tourId"
    )
    private Tour tour;

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
