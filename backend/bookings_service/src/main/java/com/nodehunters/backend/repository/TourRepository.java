package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.Tour;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.Date;
import java.util.List;
import java.util.Optional;

@Transactional
public interface TourRepository extends JpaRepository<Tour,Long>{

    @Query(value = "SELECT * FROM tbl_tour WHERE tbl_tour.departure_date_time > CURRENT_TIMESTAMP ORDER BY tbl_tour.departure_date_time ASC LIMIT 5;", nativeQuery = true)
    Optional<List<Tour>> getUpcomingTours(int limit);

    @Query("SELECT t FROM Tour t WHERE t.from = :fromDestination AND t.to = :toDestination AND t.arrivalDate >= :startDate AND t.arrivalDate <= :endDate")
    Optional<List<Tour>> findToursByDestinationAndArrivalDates(
          Destination fromDestination,
          Destination toDestination,
            Date startDate,
            Date endDate
    );
}
