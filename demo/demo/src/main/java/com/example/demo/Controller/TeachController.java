package com.example.demo.Controller;

import com.example.demo.Service.FileService;
import com.example.demo.Service.ServiceGenerator2;
import com.example.demo.document.Teacher;
import com.example.demo.repository.TeachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;

import static com.example.demo.document.Teacher.SEQUENCE_NAME;
@CrossOrigin(origins = "*")

@RequestMapping("/tutor")
@RestController

public class TeachController {
    @Autowired
    private TeachRepository teachRepository;
    @Autowired
    private ServiceGenerator2 serviceGenerator2;
//    @Autowired
//    private FileService fileService;

    @PostMapping("/create")
    public void create(@RequestBody Teacher teacher){
        //generate sequence
        teacher.setId(serviceGenerator2.getSeqNo(SEQUENCE_NAME));
        teachRepository.insert(teacher);
    }
//    @PostMapping("/upload")
//    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file) throws IOException {
//        return new ResponseEntity<>(fileService.addFile(file), HttpStatus.OK);
//    }

}
