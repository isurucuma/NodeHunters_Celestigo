package com.nodehunters.backend.dto.response;
import lombok.Data;

import java.util.List;

@Data
public class PlacesToVisitResDto {

    private String title;
    private String description;
    private List<String> images;
    private String climate;
    private String culture;

}
