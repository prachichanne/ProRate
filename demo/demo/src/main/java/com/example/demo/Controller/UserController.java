package com.example.demo.Controller;

import com.example.demo.Service.ServiceGenerator;
import com.example.demo.document.Users;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.demo.document.Users.SEQUENCE_NAME;

@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ServiceGenerator serviceGenerator;

    @PostMapping("/create")
    public void create(@RequestBody Users users){
        //generate sequence
        users.setId(serviceGenerator.getSeqNo(SEQUENCE_NAME));
        userRepository.insert(users);

    }

    @PostMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        userRepository.deleteById(id);

    }

    @GetMapping("/list")
    public List<Users> show(){
        return userRepository.findAll();

    }




}
