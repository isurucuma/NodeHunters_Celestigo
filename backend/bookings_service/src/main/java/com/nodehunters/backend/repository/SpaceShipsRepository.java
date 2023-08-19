package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.SpaceShip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpaceShipsRepository extends JpaRepository<SpaceShip, Long> {
}
