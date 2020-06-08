package com.accolite.assignment.bootstrap;

import com.accolite.assignment.domain.*;
import com.accolite.assignment.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.lang.*;
import java.util.Date;

@Component
public class BootstrapData implements CommandLineRunner {

    private UserRepository userRepository;
    private CourseRepository courseRepository;
    private TrainingMaterialsRepository trainingMaterialsRepository;
    private TrainingMaterialVersioningRepository trainingMaterialVersioningRepository;
    private ParticipantRepository participantRepository;

    public BootstrapData(UserRepository userRepository,
                         CourseRepository courseRepository,
                         TrainingMaterialsRepository trainingMaterialsRepository,
                         TrainingMaterialVersioningRepository trainingMaterialVersioningRepository,
                         ParticipantRepository participantRepository) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
        this.trainingMaterialsRepository = trainingMaterialsRepository;
        this.trainingMaterialVersioningRepository = trainingMaterialVersioningRepository;
        this.participantRepository = participantRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        // Adding user1 to database
        User user1 = new User("Nikhil", "nikhil@gmail.com", "Nikhil@123");
        userRepository.save(user1);

        // Adding user2 to database
        User user2 = new User("Sachin", "sachin@gmail.com", "Sachin@123");
        userRepository.save(user2);

        // Adding Java course to database
        Course course1 = new Course("Java Core", "This is course on Java Core.", "C, C++", "Sourav Raj");
        courseRepository.save(course1);

        // Adding Angular course to database
        Course course2 = new Course("Angular", "This is course on Angular.", "C, C++", "Sourav Raj");
        courseRepository.save(course2);

        // Adding Unix course to database
        Course course3 = new Course("Unix", "This is course on Unix.", "C, C++", "Sourav Raj");
        courseRepository.save(course3);

        Course course4 = new Course("Spring", "This is course on Spring.", "C, C++", "Sourav Raj");
        courseRepository.save(course4);

        Course course5 = new Course("Agile", "This is an introductory course on Agile.", "Software Design Patterns", "Raghav Ram");
        courseRepository.save(course5);

        Course course6 = new Course("Advanced Angular", "This is an advanced course on Angular.", "Typescript, Angular", "Srikar Mardi");
        courseRepository.save(course6);

        Course course7 = new Course("Java Collections", "This is course on Java Collections.", "Core Java", "Rohit Kumar");
        courseRepository.save(course7);

        TrainingMaterials material1 = new TrainingMaterials("Java Core", "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP");
        trainingMaterialsRepository.save((material1));

        TrainingMaterialVersioning material1Version = new TrainingMaterialVersioning(material1.getId(), material1.getCourseName(), material1.getLink(), new Date());
        trainingMaterialVersioningRepository.save(material1Version);

        TrainingMaterials material2 = new TrainingMaterials("Angular", "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP");
        trainingMaterialsRepository.save((material2));

        TrainingMaterialVersioning material2Version = new TrainingMaterialVersioning(material2.getId(), material2.getCourseName(), material2.getLink(), new Date());
        trainingMaterialVersioningRepository.save(material2Version);

        TrainingMaterials material3 = new TrainingMaterials("Angular", "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP");
        trainingMaterialsRepository.save((material3));

        TrainingMaterialVersioning material3Version = new TrainingMaterialVersioning(material3.getId(), material3.getCourseName(), material3.getLink(), new Date());
        trainingMaterialVersioningRepository.save(material3Version);

        TrainingMaterials material4 = new TrainingMaterials("Unix", "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP");
        trainingMaterialsRepository.save((material4));

        TrainingMaterialVersioning material4Version = new TrainingMaterialVersioning(material4.getId(), material4.getCourseName(), material4.getLink(), new Date());
        trainingMaterialVersioningRepository.save(material4Version);

        TrainingMaterials material5 = new TrainingMaterials("Advanced Angular", "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP");
        trainingMaterialsRepository.save((material5));

        TrainingMaterialVersioning material5Version = new TrainingMaterialVersioning(material5.getId(), material5.getCourseName(), material5.getLink(), new Date());
        trainingMaterialVersioningRepository.save(material5Version);

        TrainingMaterials material6 = new TrainingMaterials("Spring", "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP");
        trainingMaterialsRepository.save((material6));

        TrainingMaterialVersioning material6Version = new TrainingMaterialVersioning(material6.getId(), material6.getCourseName(), material6.getLink(), new Date());
        trainingMaterialVersioningRepository.save(material6Version);

        Participants participant1 = new Participants("Java Core", "Ankit Jha", "ankit.jha@gmail.com");
        participantRepository.save(participant1);

        Participants participant2 = new Participants("Java Core", "Tanay Pratik", "tanay.pratik@gmail.com");
        participantRepository.save(participant2);

        Participants participant3 = new Participants("Angular", "Amber Pratap", "amber.pratap@gmail.com");
        participantRepository.save(participant3);

        Participants participant4 = new Participants("Angular", "Prakarsh Anand", "prakarsh.anand@gmail.com");
        participantRepository.save(participant4);

        Participants participant5 = new Participants("Unix", "Rahul Raj", "rahul.raj@gmail.com");
        participantRepository.save(participant5);

        Participants participant6 = new Participants("Advanced Angular", "Rahul Raj", "rahul.raj@gmail.com");
        participantRepository.save(participant6);

        Participants participant7 = new Participants("Spring", "Rahul Raj", "rahul.raj@gmail.com");
        participantRepository.save(participant7);

        Participants participant8 = new Participants("Java Collections", "Rahul Raj", "rahul.raj@gmail.com");
        participantRepository.save(participant8);

        // Checking the number of users in Database
        System.out.println("Total users: " + userRepository.count());

        // Checking the number of courses in Database
        System.out.println("Total courses:" + courseRepository.count());

    }
}
