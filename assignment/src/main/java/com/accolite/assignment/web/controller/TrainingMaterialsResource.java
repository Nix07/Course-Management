package com.accolite.assignment.web.controller;

import com.accolite.assignment.domain.TrainingMaterialVersioning;
import com.accolite.assignment.domain.TrainingMaterials;
import com.accolite.assignment.repository.TrainingMaterialVersioningRepository;
import com.accolite.assignment.repository.TrainingMaterialsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.StreamSupport.*;

@RestController
public class TrainingMaterialsResource {
    private TrainingMaterialsRepository trainingMaterialsRepository;
    private TrainingMaterialVersioningRepository trainingMaterialVersioningRepository;

    public TrainingMaterialsResource(TrainingMaterialsRepository trainingMaterialsRepository, TrainingMaterialVersioningRepository trainingMaterialVersioningRepository) {
        this.trainingMaterialsRepository = trainingMaterialsRepository;
        this.trainingMaterialVersioningRepository = trainingMaterialVersioningRepository;
    }

    @GetMapping("/training")
    @CrossOrigin(origins="http://localhost:4200")
    public List<TrainingMaterials> getAllTrainingMaterials(){
        List<TrainingMaterials> trainingMaterials = new ArrayList<>();
        trainingMaterials = stream(trainingMaterialsRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return trainingMaterials;
    }

    @GetMapping("/training/{courseName}")
    @CrossOrigin(origins="http://localhost:4200")
    public List<TrainingMaterials> getTrainingMaterialsByCourseName(@PathVariable String courseName){
        List<TrainingMaterials> trainingMaterials = new ArrayList<>();
        trainingMaterials = stream(trainingMaterialsRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        Iterator itr = trainingMaterials.iterator();
        while(itr.hasNext()){
            TrainingMaterials currentMaterial = (TrainingMaterials) itr.next();
            if(!currentMaterial.getCourseName().equals(courseName)){
                itr.remove();
            }
        }
        return trainingMaterials;
    }

    @PostMapping("/training")
    @CrossOrigin(origins="http://localhost:4200")
    public TrainingMaterials createTrainingMaterial(@RequestBody TrainingMaterials trainingMaterials){
        TrainingMaterialVersioning temp = new TrainingMaterialVersioning(trainingMaterials.getId(), trainingMaterials.getCourseName(), trainingMaterials.getLink(), new Date());
        trainingMaterialVersioningRepository.save(temp);
        return trainingMaterialsRepository.save(trainingMaterials);
    }

    @PutMapping("/training")
    @CrossOrigin(origins="http://localhost:4200")
    public boolean updateTrainingMaterials(@RequestBody TrainingMaterials updatesMaterials){
        List<TrainingMaterials> trainingMaterials = new ArrayList<>();
        trainingMaterials = stream(trainingMaterialsRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(TrainingMaterials itr: trainingMaterials){
            if(itr.getId().equals(updatesMaterials.getId())){
                itr.setCourseName(updatesMaterials.getCourseName());
                itr.setLink(updatesMaterials.getLink());
                trainingMaterialsRepository.save(itr);
                TrainingMaterialVersioning temp = new TrainingMaterialVersioning(itr.getId(), itr.getCourseName(), itr.getLink(), new Date());
                trainingMaterialVersioningRepository.save(temp);
                return true;
            }
        }
        return false;
    }

    @DeleteMapping("/training/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public boolean deleteTrainingMaterial(@PathVariable Long id){
        List<TrainingMaterials> trainingMaterials = new ArrayList<>();
        trainingMaterials = stream(trainingMaterialsRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(TrainingMaterials itr: trainingMaterials){
            if(itr.getId().equals(id)){
                trainingMaterialsRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }
}
