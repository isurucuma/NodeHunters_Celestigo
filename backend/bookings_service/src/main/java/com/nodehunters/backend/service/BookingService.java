package com.nodehunters.backend.service;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.services.UserService;
import com.nodehunters.backend.dto.request.BookingReqDto;
import com.nodehunters.backend.entity.AppUser;
import com.nodehunters.backend.entity.Booking;
import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private TourServices tourServices;
    @Autowired
    private UserService userService;
    @Autowired
    private AppUserService appUserService;

    public Booking save(BookingReqDto booking){
        Tour tour = tourServices.getTourByOnlineId(booking.getTourOnlineId());
        AuthUser authUser = userService.getAuthUser(booking.getAppUserEmail());
        AppUser appUser = appUserService.getAppUser(authUser);
        Booking book = new Booking();
        book.setTour(tour);
        book.setBookingClass(booking.getBookingClass());
        book.setBookedDateTime(booking.getBookedDateTime());
        book.setAppUser(appUser);
        return bookingRepository.save(book);
    }

    public List<Booking> getUserAllBookings(String userEmail){
        AuthUser authUser = userService.getAuthUser(userEmail);
        AppUser appUser = appUserService.getAppUser(authUser);
        return bookingRepository.findAllByAppUser(appUser);
    }
}
