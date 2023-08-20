package com.nodehunters.backend.service;

import com.nodehunters.backend.dto.response.FullTourResDto;
import com.nodehunters.backend.dto.response.ShortSpaceShipRes;
import com.nodehunters.backend.dto.response.ShortTourResDto;
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

    public ResponseEntity<List<ShortTourResDto>> getUpcomingTours(int limit) {
        Optional<List<Tour>> tours = tourRepository.getUpcomingTours(limit);
        return getShortTourRes(tours);
    }

    private ResponseEntity<List<ShortTourResDto>> getShortTourRes(Optional<List<Tour>> tours) {
        if(tours.isPresent()){
            List<Tour> tourList = tours.get();
            List<ShortTourResDto> shortTourResDtoList = tourList.stream()
                    .map(tour -> {
                        ShortTourResDto shortTourResDto = modelMapper.map(tour, ShortTourResDto.class);
                        ShortSpaceShipRes shortSpaceShipRes = modelMapper.map(tour.getSpaceShip(), ShortSpaceShipRes.class);
                        shortTourResDto.setSpaceShip(shortSpaceShipRes);
                        return shortTourResDto;
                    })
                    .toList();
            return ResponseEntity.ok(shortTourResDtoList);
        }
        return ResponseEntity.notFound().build();
    }

    public ResponseEntity<List<ShortTourResDto>> filterTours(String from,
                                                  String to,
                                                  Date startDate,
                                                  Date endDate) {
        try{
            Destination dsFrom = destinationsService.getByName(from);
            Destination dsTo = destinationsService.getByName(to);

            Optional<List<Tour>> tours = tourRepository.findToursByDestinationAndArrivalDates(dsFrom,dsTo, startDate, endDate);
            return getShortTourRes(tours);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    public ResponseEntity<FullTourResDto> getTourById(Long tourId) {
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
            FullTourResDto fullTourResDto = modelMapper.map(tourObj, FullTourResDto.class);
            fullTourResDto.setAvailableClassOneSeats(classOneSeats - classOneBookings);
            fullTourResDto.setAvailableClassTwoSeats(classTwoSeats - classTwoBookings);
            fullTourResDto.setAvailableClassThreeSeats(classThreeSeats - classThreeBookings);
            fullTourResDto.setAvailableTotalSeats(classOneSeats + classTwoSeats + classThreeSeats - classOneBookings - classTwoBookings - classThreeBookings);
            return ResponseEntity.ok(fullTourResDto);
        }
        return ResponseEntity.notFound().build();
    }
}