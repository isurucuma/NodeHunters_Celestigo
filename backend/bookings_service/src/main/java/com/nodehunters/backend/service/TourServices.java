package com.nodehunters.backend.service;

import com.nodehunters.backend.dto.response.TourResDto;
import com.nodehunters.backend.entity.Booking;
import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.SpaceShip;
import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.repository.TourRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TourServices {
    private final TourRepository tourRepository;
    private final DestinationsService destinationsService;
    private final ModelMapper modelMapper;

    public ResponseEntity<?> getUpcomingTours(int limit) {
        Optional<List<Tour>> tours = tourRepository.getUpcomingTours(limit);
        if (tours.isPresent()) {
            return ResponseEntity.ok(tours.get());
        }
        return ResponseEntity.notFound().build();
    }

    public ResponseEntity<List<Tour>> filterTours(String from,
                                                  String to,
                                                  Date startDate,
                                                  Date endDate) {
        try{
            Destination dsFrom = destinationsService.getByName(from);
            Destination dsTo = destinationsService.getByName(to);



            Optional<List<Tour>> tours = tourRepository.findToursByDestinationAndArrivalDates(dsFrom,dsTo, startDate, endDate);
            return tours.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    public ResponseEntity<TourResDto> getTourById(Long tourId) {
        Optional<Tour> tour = tourRepository.findById(tourId);
        if (tour.isPresent()){
            Tour tourObj = tour.get();
            List<Booking> bookings = tourObj.getBookings();
            int classOneBookings = 0;
            int classTwoBookings = 0;
            int classThreeBookings = 0;
            for (Booking booking: bookings) {
                if ("class1".equals(booking.getBookingClass())){
                    classOneBookings += booking.getNumberOfSeats();
                }else if ("class2".equals(booking.getBookingClass())){
                    classTwoBookings += booking.getNumberOfSeats();
                }else if ("class3".equals(booking.getBookingClass())){
                    classThreeBookings += booking.getNumberOfSeats();
                }
            }

            SpaceShip spaceShip = tourObj.getSpaceShip();
            int classOneSeats = spaceShip.getNumberOfClassOneSeats();
            int classTwoSeats = spaceShip.getNumberOfClassTwoSeats();
            int classThreeSeats = spaceShip.getNumberOfClassThreeSeats();
            TourResDto tourResDto = modelMapper.map(tourObj, TourResDto.class);
            tourResDto.setAvailableClassOneSeats(classOneSeats - classOneBookings);
            tourResDto.setAvailableClassTwoSeats(classTwoSeats - classTwoBookings);
            tourResDto.setAvailableClassThreeSeats(classThreeSeats - classThreeBookings);
            tourResDto.setAvailableTotalSeats(classOneSeats + classTwoSeats + classThreeSeats - classOneBookings - classTwoBookings - classThreeBookings);
            return ResponseEntity.ok(tourResDto);
        }
        return ResponseEntity.notFound().build();
    }
}