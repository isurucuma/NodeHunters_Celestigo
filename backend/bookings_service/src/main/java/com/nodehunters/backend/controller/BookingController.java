package com.nodehunters.backend.controller;

import com.nodehunters.backend.dto.request.BookingReqDto;
import com.nodehunters.backend.dto.response.BookingResDto;
import com.nodehunters.backend.entity.Booking;
import com.nodehunters.backend.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    private ModelMapper modelMapper;
    public BookingController(){
        modelMapper = new ModelMapper();
    }
    @PostMapping
    public ResponseEntity<BookingResDto> create(@RequestBody BookingReqDto bookingReqDto){
        Booking result = bookingService.save(bookingReqDto);
        if(result==null){
            return ResponseEntity.badRequest().build();
        }
        BookingResDto res = modelMapper.map(result, BookingResDto.class);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<List<BookingResDto>> getAllBookings(@RequestParam("email") String email){
        List<Booking> bookingList = bookingService.getUserAllBookings(email);
        if(bookingList == null){
           return ResponseEntity.badRequest().build();
        }
        List<BookingResDto> bookingResDtos = bookingList.stream().map(booking -> modelMapper.map(booking, BookingResDto.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(bookingResDtos);
    }

}
