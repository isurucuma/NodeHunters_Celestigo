package com.nodehunters.backend.dto.response;

import lombok.Data;

import java.util.Date;

@Data
public class PaymentCardResDto {
    private String cardNumber;
    private String cardType;
    private int cvc;
    private Date expiearyDate;
}
