package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.Destination;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface DestinationsRepository extends JpaRepository<Destination, Long> {
    public Destination findByName(String name);
}
