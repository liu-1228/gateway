package com.casco.opgw.signal.dto.analogdata;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AnalogDataItemDto {
    private String key;
    private List<Float> value = new ArrayList<>();
}
