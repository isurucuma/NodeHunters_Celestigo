package com.nodehunters.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "tbl_destination")
public class Destination {

    @Id
    private Long id;

    private String name;

    private String description;

    private String image;

    private String point;

    private String region;
}
