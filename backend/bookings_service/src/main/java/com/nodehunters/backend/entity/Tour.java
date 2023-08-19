package com.nodehunters.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"bookings"})
@Entity
@Table(name = "tbl_tour")
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tourId;

    private double classOneUnitPrice;

    private double classTwoUnitPrice;

    private double classThreeUnitPrice;

    private Date arrivalDate;

    private Date departureDate;

    private Time arrivalTime;

    private Time departureTime;

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
            mappedBy = "tour"
    )
    private List<Booking> bookings;


}
