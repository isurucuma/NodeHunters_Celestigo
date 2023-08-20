package com.nodehunters.backend.dto.request;

import lombok.Data;


public class TourFilterRequest {
    String from;
    String to;
    String startDate;
    String endDate;
    Integer startPrice;
    Integer endPrice;
    String spaceshipType;
    Integer seatClass;
}
