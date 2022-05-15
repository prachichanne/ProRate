package com.example.demo.Services;

import com.example.demo.Models.dbSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;


@Service
public class ServiceGenerator {

    @Autowired
    private MongoOperations mongoOperations;

    public int getSeqNo(String sequenceName){
        Query query = new Query(Criteria.where("id").is(sequenceName));
        Update update =new Update().inc("seq", 1);
        dbSequence counter = mongoOperations
                .findAndModify(query,update, options().returnNew(true).upsert(true),
                        dbSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;


    }
}
