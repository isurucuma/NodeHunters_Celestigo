package com.nodehunters.backend.repository;


import com.nodehunters.backend.entity.Booking;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface BookingRepository extends JpaRepository<Booking, Long> {

}
