package com.nodehunters.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpaceShipResDto {
    private String name;

    private String description;

    private String registrationNumber;

    private String type;

    private int numberOfClassOneSeats;

    private int numberOfClassTwoSeats;

    private int numberOfClassThreeSeats;
}
