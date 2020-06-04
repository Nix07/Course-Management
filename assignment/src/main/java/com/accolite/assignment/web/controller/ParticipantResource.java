package com.accolite.assignment.web.controller;

import com.accolite.assignment.domain.Course;
import com.accolite.assignment.domain.Participants;
import com.accolite.assignment.repository.ParticipantRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
public class ParticipantResource {
    private ParticipantRepository participantRepository;

    public ParticipantResource(ParticipantRepository participantRepository){
        this.participantRepository = participantRepository;
    }

    @GetMapping("/participants/{courseName}")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Participants> getParticipantWithCourseName(@PathVariable String courseName){
        List<Participants> participants = new ArrayList<>();
        List<Participants> temp = new ArrayList<>();
        participants = StreamSupport.stream(participantRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(Participants itr: participants){
            if(itr.getCourseName().equals(courseName)){
                temp.add(itr);
            }
        }
        return temp;
    }
}
