package com.accolite.assignment.bootstrap;

import com.accolite.assignment.domain.User;
import com.accolite.assignment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootstrapData implements CommandLineRunner {

    private UserRepository userRepository;

    public BootstrapData(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        // Adding user1 to database
        User user1 = new User("Nikhil", "nikhil@gmail.com", "Nikhil@123");
        userRepository.save(user1);

        // Adding user2 to database
        User user2 = new User("Sachin", "sachin@gmail.com", "Sachin@123");
        userRepository.save(user2);

        // Checking the number of users in Database
        System.out.println("Total users: " + userRepository.count());
    }
}
