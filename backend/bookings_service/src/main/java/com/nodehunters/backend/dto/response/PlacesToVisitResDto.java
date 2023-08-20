package com.nodehunters.backend.dto.response;
import lombok.Data;

import java.util.List;

@Data
public class PlacesToVisitResDto {

    private String name;
    private String description;
    private List<String> images;

}
