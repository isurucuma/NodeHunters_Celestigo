package com.nodehunters.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tbl_destination")
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long destinationId;

    private String name;

    private String description;

    @ElementCollection
    private List<String> images;

    private String point;

    private String region;
}
