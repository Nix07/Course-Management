package com.accolite.assignment.repository;

import com.accolite.assignment.domain.TrainingMaterials;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingMaterialsRepository extends CrudRepository<TrainingMaterials, Long> {
}
