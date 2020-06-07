package com.accolite.assignment.web.controller;

import com.accolite.assignment.domain.TrainingMaterialVersioning;
import com.accolite.assignment.domain.TrainingMaterials;
import com.accolite.assignment.repository.TrainingMaterialVersioningRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.StreamSupport.stream;

@RestController
public class TrainingMaterialsVersioningResource {
    private TrainingMaterialVersioningRepository trainingMaterialVersioningRepository;

    public TrainingMaterialsVersioningResource(TrainingMaterialVersioningRepository trainingMaterialVersioningRepository){
        this.trainingMaterialVersioningRepository = trainingMaterialVersioningRepository;
    }

    @GetMapping("/versions")
    @CrossOrigin(origins="http://localhost:4200")
    public List<TrainingMaterialVersioning> getAllVersions(){
        List<TrainingMaterialVersioning> trainingMaterialVersioning = new ArrayList<>();
        trainingMaterialVersioning = stream(trainingMaterialVersioningRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return trainingMaterialVersioning;
    }

    @GetMapping("/versions/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public List<TrainingMaterialVersioning> getVersions(@PathVariable Long id){
        List<TrainingMaterialVersioning> trainingMaterialVersioning = new ArrayList<>();
        List<TrainingMaterialVersioning> response = new ArrayList<>();
        trainingMaterialVersioning = stream(trainingMaterialVersioningRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(TrainingMaterialVersioning itr: trainingMaterialVersioning){
            if(itr.getMaterialId().equals(id)){
                response.add(itr);
            }
        }
        return response;
    }
}
