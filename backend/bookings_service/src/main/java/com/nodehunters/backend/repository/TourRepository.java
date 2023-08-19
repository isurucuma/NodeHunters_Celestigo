package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.Tour;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

@Transactional
public interface TourRepository extends JpaRepository<Tour,Long>{

    @Query(value = "SELECT * FROM tbl_tour WHERE tbl_tour.departure_date_time > CURRENT_TIMESTAMP ORDER BY tbl_tour.departure_date_time ASC LIMIT 5;", nativeQuery = true)
    Optional<List<Tour>> getUpcomingTours(int limit);
}
