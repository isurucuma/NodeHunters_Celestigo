package com.nodehunters.backend.service;

import com.nodehunters.backend.entity.SpaceShip;
import com.nodehunters.backend.repository.SpaceShipsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpaceShipsService {

    @Autowired
    SpaceShipsRepository spaceShipsRepository;
    public List<SpaceShip> getAll(){
        return spaceShipsRepository.findAll().stream().toList();
    }

    public String create(SpaceShip spaceShip){
        spaceShipsRepository.save(spaceShip);
        return "Ok";
    }
}
