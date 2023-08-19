package com.nodehunters.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_spaceship")
public class SpaceShip {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
