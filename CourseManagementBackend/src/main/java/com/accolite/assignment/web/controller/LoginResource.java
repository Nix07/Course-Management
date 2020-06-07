package com.accolite.assignment.web.controller;

import com.accolite.assignment.domain.*;
import com.accolite.assignment.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
public class LoginResource{
    private UserRepository userRepository;

    public LoginResource(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/login")
    @CrossOrigin(origins="http://localhost:4200")
    public String loginFunction(){
        return "Login Page!";
    }

    @PostMapping("/login")
    @CrossOrigin(origins="http://localhost:4200")
    public Boolean login(@RequestBody User user){

        List<User> users = new ArrayList<>();
        users = StreamSupport.stream(userRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        for(User itr: users){
            System.out.println("Email: " + itr.getEmail() + " Password: " + itr.getPassword() + " " + user.getEmail() + " " + user.getPassword());
            if(itr.getEmail().equalsIgnoreCase(user.getEmail()) && itr.getPassword().equals(user.getPassword())){
                return true;
            }
        }
        return false;
    }
}