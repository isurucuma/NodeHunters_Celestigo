package com.nodehunters.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_trip")
public class Trip {

    @Id
    private Long id;

    private double classOneUnitPrice;

    private double classTwoUnitPrice;

    private double classThreeUnitPrice;

    private String arrivalDateTime;

    private String departureDateTime;

    @ManyToOne()
    private Destination from;

    @ManyToOne()
    private Destination to;

    @ManyToOne()
    private SpaceShip spaceShip;

}
