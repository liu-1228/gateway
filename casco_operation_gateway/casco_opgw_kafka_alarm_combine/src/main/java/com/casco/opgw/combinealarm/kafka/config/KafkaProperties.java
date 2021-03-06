package com.casco.opgw.combinealarm.kafka.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.io.Serializable;

@ConfigurationProperties("kafka.topic")
@Data
public class KafkaProperties implements Serializable {

    public String groupId;
    public String topicName;

}