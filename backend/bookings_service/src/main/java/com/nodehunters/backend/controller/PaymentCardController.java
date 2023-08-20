package com.nodehunters.backend.controller;

import com.nodehunters.backend.dto.response.PaymentCardResDto;
import com.nodehunters.backend.dto.response.PlacesToVisitResDto;
import com.nodehunters.backend.entity.PaymentCard;
import com.nodehunters.backend.entity.PlacesToVisit;
import com.nodehunters.backend.service.PaymentCardService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/paymentcards")
public class PaymentCardController {

    @Autowired
    private PaymentCardService paymentCardService;

    private ModelMapper modelMapper;

    public PaymentCardController(){
        modelMapper = new ModelMapper();
    }
    @GetMapping
    public ResponseEntity<List<PaymentCardResDto>> getUserCardList(@RequestParam("email") String email){
        List<PaymentCard> cards = paymentCardService.getUserCardList(email);
        if(cards == null){
            return ResponseEntity.notFound().build();
        }
        List<PaymentCardResDto> resDtos = cards.stream().map(place -> modelMapper.map(place, PaymentCardResDto.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(resDtos);
    }
}
