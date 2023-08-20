package com.nodehunters.backend.service;

import com.nodehunters.backend.entity.PaymentCard;
import com.nodehunters.backend.repository.PaymentCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentCardService {
    @Autowired
    private PaymentCardRepository paymentCardRepository;
    public List<PaymentCard> getUserCardList(String name){
        System.out.println("User name : " + name);
        return paymentCardRepository.findAll();
    }
}
