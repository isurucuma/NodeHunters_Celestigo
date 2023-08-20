package com.nodehunters.backend.controller;

import com.nodehunters.backend.entity.Destination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/destinations")
public class DestinationsController {
    @PostMapping()
    public ResponseEntity<String> create(){
        Destination ds = new Destination();
        ds.setDescription("this is setination test_01");
        ds.setName("ds_test_01");
        ds.setPlanet("Mars");
        ds.setPoint("point 01");
        return ResponseEntity.ok("created");
    }
}
