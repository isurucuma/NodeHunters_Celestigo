package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationsRepository extends JpaRepository<Destination, Long> {
}
