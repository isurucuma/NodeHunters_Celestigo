package com.nodehunters.backend.service;

import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.repository.TourRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TourServices {
    private final TourRepository tourRepository;

    public ResponseEntity<?> getUpcomingTours(int limit) {
        Optional<List<Tour>> tours = tourRepository.getUpcomingTours(limit);
        if (tours.isPresent()) {
            return ResponseEntity.ok(tours.get());
        }
        return ResponseEntity.notFound().build();
    }
}
