package com.accolite.assignment.repository;

import com.accolite.assignment.domain.Participants;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends CrudRepository<Participants, Long> {
}
