package com.nodehunters.backend.repository;


import com.nodehunters.backend.entity.AppUser;
import com.nodehunters.backend.entity.Booking;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Transactional
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findAllByAppUser(AppUser appUser);

}
