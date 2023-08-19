package com.nodehunters.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tbl_spaceship")
public class SpaceShip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long spaceshipId;

    private String name;

    private String description;

    private String registrationNumber;

    private String type;

    private int numberOfClassOneSeats;

    private int numberOfClassTwoSeats;

    private int numberOfClassThreeSeats;

    @ElementCollection
    private List<String> images;

}