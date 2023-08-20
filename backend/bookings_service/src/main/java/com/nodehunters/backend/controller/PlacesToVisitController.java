package com.nodehunters.backend.controller;

import com.nodehunters.backend.dto.response.PlacesToVisitResDto;
import com.nodehunters.backend.entity.PlacesToVisit;
import com.nodehunters.backend.service.PlacesToVisitService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/places")
public class PlacesToVisitController {
    @Autowired
    private PlacesToVisitService placesToVisitService;
    private ModelMapper modelMapper;
    public PlacesToVisitController(){
        this.modelMapper = new ModelMapper();
    }
    @GetMapping
    public ResponseEntity<List<PlacesToVisitResDto>> getRelevantPlaces(@RequestParam("destination") String destinationName){
        List<PlacesToVisit> places = placesToVisitService.getReleventPlaces(destinationName);
        if(places == null){
            return ResponseEntity.notFound().build();
        }
        List<PlacesToVisitResDto> resDtos = places.stream().map(place -> modelMapper.map(place, PlacesToVisitResDto.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(resDtos);
    }
}
