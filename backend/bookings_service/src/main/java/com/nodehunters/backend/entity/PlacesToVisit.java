package com.nodehunters.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tbl_places_to_visit")
public class PlacesToVisit {

    @Id
    private Long placeId;

    private String name;

    private String description;

    @ElementCollection
    private List<String> images; 

    @ManyToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "destination_id",
            referencedColumnName = "destinationId"
    )
    private Destination destination;
}
