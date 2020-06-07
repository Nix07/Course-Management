package com.accolite.assignment.repository;

import com.accolite.assignment.domain.TrainingMaterialVersioning;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingMaterialVersioningRepository extends CrudRepository<TrainingMaterialVersioning, Long> {
}
