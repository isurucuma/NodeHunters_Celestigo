package com.nodehunters.backend.controller;

import com.nodehunters.backend.dto.response.SpaceShipResDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/spaceships")
public class SpaceShipsController {

    @PostMapping()
    public ResponseEntity<String> create(){
        return ResponseEntity.ok("");
    }

    @GetMapping()
    public ResponseEntity<List<SpaceShipResDto>> getAll(){
        return null;
    }
}
