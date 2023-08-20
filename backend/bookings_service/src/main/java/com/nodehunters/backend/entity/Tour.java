package com.nodehunters.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Date;
import java.sql.Time;
import java.time.Instant;
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

    private double price;

    @ManyToOne(
            cascade = CascadeType.MERGE,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "from_destination_id",
            referencedColumnName = "destinationId"
    )
    private Destination from;

    @ManyToOne(
            cascade = CascadeType.MERGE,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "to_destination_id",
            referencedColumnName = "destinationId"
    )
    private Destination to;

    @OneToOne(
            cascade = CascadeType.MERGE,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "spaceship_id",
            referencedColumnName = "spaceShipId"
    )
    private SpaceShip spaceShip;

    @JsonIgnore
    @OneToMany(
            cascade = CascadeType.MERGE,
            fetch = FetchType.LAZY,
            mappedBy = "tour"
    )
    private List<Booking> bookings;

    @CreationTimestamp
    private Instant createdAt;

    @UpdateTimestamp
    private Instant updatedAt;

}
