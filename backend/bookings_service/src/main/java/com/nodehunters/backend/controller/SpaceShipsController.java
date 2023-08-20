package com.nodehunters.backend.controller;

import com.nodehunters.backend.dto.response.SpaceShipResDto;
import com.nodehunters.backend.entity.SpaceShip;
import com.nodehunters.backend.service.SpaceShipsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/spaceships")
public class SpaceShipsController {

    @Autowired
    SpaceShipsService spaceShipsService;

    ModelMapper modelMapper;

    public SpaceShipsController(){
        this.modelMapper = new ModelMapper();
    }
    @PostMapping()
    public ResponseEntity<String> create(){
        SpaceShip sp = new SpaceShip();
        sp.setDescription("this is the first space ship");
        sp.setName("test_space_ship_01");
        sp.setNumberOfClassOneSeats(50);
        sp.setNumberOfClassTwoSeats(100);
        sp.setNumberOfClassThreeSeats(200);
        sp.setRegistrationNumber("weq-5677");
        sp.setImages(Arrays.asList("/img1.jpg", "img2.jpg"));
        spaceShipsService.create(sp);
        return ResponseEntity.ok("created");
    }

    @GetMapping()
    public ResponseEntity<List<SpaceShipResDto>> getAll(){
        List<SpaceShip> spList = spaceShipsService.getAll();
        //List<SpaceShipResDto> spDtoList = modelMapper.map(spList, SpaceShipResDto.class);
        return null;
    }
}
