package com.nodehunters.backend.service;

import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.repository.TourRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Service
public class TourServices {
    private final TourRepository tourRepository;
    private final DestinationsService destinationsService;

    public ResponseEntity<?> getUpcomingTours(int limit) {
        Optional<List<Tour>> tours = tourRepository.getUpcomingTours(limit);
        if (tours.isPresent()) {
            return ResponseEntity.ok(tours.get());
        }
        return ResponseEntity.notFound().build();
    }

    public List<Tour> filterTours(String from, String to){
        try{
            Destination dsFrom = destinationsService.getByName(from);
            Destination dsTo = destinationsService.getByName(to);
            List<Date> dates = Stream.of(
                    Date.valueOf(LocalDate.of(2023, 8, 11)),
                    Date.valueOf(LocalDate.of(2023, 12, 11))
            ).collect(Collectors.toList());
            List<Tour> tours = tourRepository.findToursByDestinationAndArrivalDates(dsFrom,dsTo, dates);
            return tours;
        }catch (Exception e){
            return null;
        }

    }
}
