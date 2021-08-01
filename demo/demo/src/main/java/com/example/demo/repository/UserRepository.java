package com.example.demo.repository;

import com.example.demo.Models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, Integer> {
    UserModel findByUsername(String username);
}
