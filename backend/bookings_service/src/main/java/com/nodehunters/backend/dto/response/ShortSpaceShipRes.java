package com.nodehunters.backend.dto.response;

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
public class ShortTourResDto {


    private Date arrivalDate;

    private Date departureDate;

    private Destination from;

    private Destination to;

    private SpaceShip spaceShip;


}
