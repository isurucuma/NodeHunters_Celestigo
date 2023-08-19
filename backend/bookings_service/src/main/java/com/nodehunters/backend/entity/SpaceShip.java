package com.nodehunters.backend.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "tbl_spaceship")
public class SpaceShip {

    @Id
    private Long spaceshipId;

    private String name;

    private String description;

    private String registrationNumber;

    private String type;

    private int numberOfClassOneSeats;

    private int numberOfClassTwoSeats;

    private int numberOfClassThreeSeats;

    @ElementCollection
    private List<String> imageUrls;

}
