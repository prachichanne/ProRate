package com.example.demo.repository;

import com.example.demo.document.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface  UserRepository extends MongoRepository<Users,Integer> {

}
