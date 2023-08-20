package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.PlacesToVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface PlacesToVisitRepository extends JpaRepository<PlacesToVisit, Long> {

    public List<PlacesToVisit> findAllByDestination(Destination destination);
}
