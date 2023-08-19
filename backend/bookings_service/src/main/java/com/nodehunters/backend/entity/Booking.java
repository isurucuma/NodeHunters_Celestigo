package com.nodehunters.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_booking")
public class Booking {
    @Id
    private Long bookingId;

    private String bookingClass;

    private int numberOfSeats;

    private String bookedDateTime;

    @ManyToOne(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY
    )
    @JoinColumn(
        name = "trip_id",
        referencedColumnName = "tripId"
    )
    private Trip trip;

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
