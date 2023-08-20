package com.nodehunters.backend.dto.request;

import lombok.Data;

@Data
public class BookingReqDto {

    private String bookingClass;
    private int numberOfSeats;
    private String bookedDateTime;
    private Long  tourOnlineId;
    private String appUserEmail;
}
