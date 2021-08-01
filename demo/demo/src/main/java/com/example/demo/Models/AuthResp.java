package com.example.demo.Models;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "AuthUser")
public class AuthResp {

    private String response;

    public AuthResp(String response) {
        this.response = response;
    }

    public AuthResp() {

    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
