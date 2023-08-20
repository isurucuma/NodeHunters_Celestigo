package com.nodehunters.backend.service;

import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.PlacesToVisit;
import com.nodehunters.backend.repository.PlacesToVisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlacesToVisitService {
    @Autowired
    private PlacesToVisitRepository placesToVisitRepository;

    @Autowired
    private DestinationsService destinationsService;

    public List<PlacesToVisit> getReleventPlaces(String destinationName){
        try{
            Destination ds = destinationsService.getByName(destinationName);
            return placesToVisitRepository.findAllByDestination(ds);
        }catch (Exception e){
            return null;
        }

    }

}
