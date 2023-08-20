package com.nodehunters.backend.dto.response;

import com.nodehunters.backend.entity.Booking;
import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.SpaceShip;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TourResDto {

    private double classOneUnitPrice;

    private double classTwoUnitPrice;

    private double classThreeUnitPrice;

    private Date arrivalDate;

    private Date departureDate;

    private Time arrivalTime;

    private Time departureTime;

    private Destination from;

    private Destination to;

    private SpaceShip spaceShip;

    private int availableTotalSeats;

    private int availableClassOneSeats;

    private int availableClassTwoSeats;

    private int availableClassThreeSeats;

}
