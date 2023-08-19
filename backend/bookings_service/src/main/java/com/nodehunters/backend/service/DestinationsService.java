package com.nodehunters.backend.service;

import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.repository.DestinationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationsService {
    @Autowired
    DestinationsRepository destinationsRepository;

    public String save(Destination destination){
        destinationsRepository.save(destination);
        return "ok";
    }

    public Destination getByName(String name){
        return destinationsRepository.findByName(name);
    }

    public List<Destination> getAll(){
        return destinationsRepository.findAll().stream().toList();
    }

}
