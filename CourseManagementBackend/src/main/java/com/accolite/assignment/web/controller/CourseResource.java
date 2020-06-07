package com.accolite.assignment.web.controller;

import com.accolite.assignment.domain.Course;
import com.accolite.assignment.repository.CourseRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
public class CourseResource {
    private CourseRepository courseRepository;

    public CourseResource(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping("/courses")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Course> getCourses(){
        List<Course> courses = new ArrayList<>();
        courses = StreamSupport.stream(courseRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return courses;
    }

    @GetMapping("/courses/{name}")
    @CrossOrigin(origins="http://localhost:4200")
    public Course getCourseByName(@PathVariable String name){
        List<Course> courses = new ArrayList<>();
        courses = StreamSupport.stream(courseRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(Course itr: courses){
            if (itr.getCourseName().equals(name))
                return itr;
        }
        return null;
    }

    @PostMapping("/courses")
    @CrossOrigin(origins="http://localhost:4200")
    public Course createCourse(@RequestBody Course course){
        Course temp = new Course(course.getCourseName(), course.getDescription() ,course.getPreRequisite(), course.getInstructorName());
        return courseRepository.save(temp);
    }

    @PutMapping("/courses/{name}")
    @CrossOrigin(origins="http://localhost:4200")
    public boolean editCourse(@RequestBody Course course, @PathVariable String name){
        List<Course> courses = new ArrayList<>();
        courses = StreamSupport.stream(courseRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(Course itr: courses){
            if (itr.getCourseName().equals(course.getCourseName())) {
                itr.setDescription(course.getDescription());
                itr.setInstructorName(course.getInstructorName());
                itr.setPreRequisite(course.getPreRequisite());
                itr.setLastModified(LocalTime.now());
                courseRepository.save((itr));
                return true;
            }
        }
        return false;
    }

    @DeleteMapping("/courses/{name}")
    @CrossOrigin(origins="http://localhost:4200")
    public boolean deleteCourse(@PathVariable String name){
        List<Course> courses = new ArrayList<>();
        courses = StreamSupport.stream(courseRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(Course itr: courses){
            if (itr.getCourseName().equals(name)){
                courseRepository.deleteById(itr.getId());
                return true;
            }
        }
        return false;
    }
}
