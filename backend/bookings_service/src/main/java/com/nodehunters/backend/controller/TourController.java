package com.nodehunters.backend.controller;

import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.service.TourServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/tour")
public class TourController {

    private final TourServices tourServices;
    @GetMapping
    public ResponseEntity<?> getUpcomingTours(@RequestParam("limit") int limit) {
        return tourServices.getUpcomingTours(limit);
    }

    @GetMapping
    public ResponseEntity<?> filterTours(@RequestParam("from") String from, @RequestParam("from") String to){
        return ResponseEntity.ok(tourServices.filterTours(from, to));
    }
}
