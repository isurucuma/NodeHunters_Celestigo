package com.nodehunters.backend.dto.response;

import lombok.Data;

@Data
public class BookingResDto {
    private String bookingClass;

    private int numberOfSeats;

    private String bookedDateTime;

}
