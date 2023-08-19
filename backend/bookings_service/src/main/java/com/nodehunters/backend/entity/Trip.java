package com.nodehunters.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tbl_trip")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tripId;

    private double classOneUnitPrice;

    private double classTwoUnitPrice;

    private double classThreeUnitPrice;

    private String arrivalDateTime;

    private String departureDateTime;

    @ManyToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "from_destination_id",
            referencedColumnName = "destinationId"
    )
    private Destination from;

    @ManyToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "to_destination_id",
            referencedColumnName = "destinationId"
    )
    private Destination to;

    @OneToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "spaceship_id",
            referencedColumnName = "spaceShipId"
    )
    private SpaceShip spaceShip;

    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "trip"
    )
    private List<Booking> bookings;


}
