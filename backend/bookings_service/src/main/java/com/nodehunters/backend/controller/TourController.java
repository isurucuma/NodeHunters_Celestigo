package com.nodehunters.backend.controller;

import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.service.TourServices;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/tour")
public class TourController {

    private final TourServices tourServices;
    @GetMapping
    public ResponseEntity<?> getUpcomingTours(@RequestParam("limit") int limit) {
        return tourServices.getUpcomingTours(limit);
    }

    @GetMapping("/filter")
    public ResponseEntity<?> filterTours(@RequestParam("from") String from,
                                         @RequestParam("to") String to,
                                         @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
                                         @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate){
        return tourServices.filterTours(from, to, startDate, endDate);
    }
}
