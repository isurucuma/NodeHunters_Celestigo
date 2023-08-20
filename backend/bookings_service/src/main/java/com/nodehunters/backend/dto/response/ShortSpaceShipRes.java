package com.nodehunters.backend.dto.response;

import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.SpaceShip;
import jakarta.persistence.ElementCollection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShortSpaceShipRes {
    private Long spaceshipId;

    private String name;

    private String type;

    @ElementCollection
    private List<String> images;

}
