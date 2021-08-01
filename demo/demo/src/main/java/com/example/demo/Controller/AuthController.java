package com.example.demo.Controller;

import com.example.demo.Models.AuthReq;
import com.example.demo.Models.AuthResp;
import com.example.demo.Models.Teacher;
import com.example.demo.Models.UserModel;
import com.example.demo.Services.FileService;
import com.example.demo.Services.ServiceGenerator2;
import com.example.demo.Services.UserService;
import com.example.demo.repository.TeachRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.Services.ServiceGenerator;
import com.example.demo.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static com.example.demo.Models.UserModel.SEQUENCE_NAME;

@CrossOrigin("*")
@RestController
public class AuthController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ServiceGenerator serviceGenerator;

    @Autowired
    private TeachRepository teachRepository;

    @Autowired
    private ServiceGenerator2 serviceGenerator2;

    @Autowired
    private FileService fileService;

    @PostMapping("/subs")
    private ResponseEntity<?>subscribeClient(@RequestBody AuthReq authReq){

        String username = authReq.getUsername();
        String password = authReq.getPassword();
        String email = authReq.getEmail();
        String firstname = authReq.getFirstname();
        String lastname = authReq.getLastname();

        UserModel userModel = new UserModel();
        userModel.setId(serviceGenerator.getSeqNo(SEQUENCE_NAME));
        userModel.setUsername(username);
        userModel.setPassword(password);
        userModel.setEmail(email);
        userModel.setFirstname(firstname);
        userModel.setLastname(lastname);


        try {
            userRepository.save(userModel);
        }
        catch (Exception e){
            return ResponseEntity.ok(new AuthResp("Error in  Subscription for "+ username));
        }
        return ResponseEntity.ok(new AuthResp("Successful Subscription for "+ username));


    }

    @PostMapping("/auth")
    private ResponseEntity<?>authenticateClient(@RequestBody AuthReq authReq){
        String username = authReq.getUsername();
        String password = authReq.getPassword();

        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }
        catch (Exception e) {
            return ResponseEntity.ok(new AuthResp("Error in  Authentication for " + username));
        }

        UserDetails loadedUser = userService.loadUserByUsername(username);
        String generateToken = jwtUtils.generateToken(loadedUser);
        return ResponseEntity.ok(new AuthResp("Successful Authentication !! Token :  " + generateToken));

    }

    @GetMapping("/list")
    public List<UserModel> show(){
        return userRepository.findAll();

    }

    @GetMapping("/dashboard")
    public String dashboard(){
        return "Welcome to dashboard "+ SecurityContextHolder.getContext().getAuthentication().getName();

    }

    @PostMapping("/register")
    public Exception create(@RequestBody Teacher teacher){
        //generate sequence
        try {
            teacher.setId(serviceGenerator2.getSeqNo(SEQUENCE_NAME));
            teachRepository.save(teacher);
        }
        catch (Exception e){
            return (e);
        }
        return null;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) throws IOException {
        return new ResponseEntity<>(fileService.addFile(file), HttpStatus.OK);
    }








}
