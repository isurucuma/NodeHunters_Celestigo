package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.SpaceShip;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface SpaceShipsRepository extends JpaRepository<SpaceShip, Long> {
}
