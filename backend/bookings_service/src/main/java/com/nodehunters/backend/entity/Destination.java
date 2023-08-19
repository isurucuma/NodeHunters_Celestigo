package com.nodehunters.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_destination")
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long destinationId;

    private String name;

    private String description;

    @ElementCollection
    private List<String> images;

    private String point;

    private String region;
}
