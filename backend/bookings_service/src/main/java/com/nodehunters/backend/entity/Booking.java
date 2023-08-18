package com.nodehunters.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_booking")
public class Booking {
    @Id
    private Long id;

    private String bookClass;

    private int numberOfSeats;

    private String dateTime;

}
