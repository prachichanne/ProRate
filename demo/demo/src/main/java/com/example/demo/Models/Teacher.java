package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.w3c.dom.Text;

import java.util.Date;

@Document(collection = "Teachers")
public class Teacher {

    @Transient
    public  static final String SEQUENCE_NAME="teacher_sequence";



    @Id
    private Integer id;
    private String firstname ;
    private String lastname ;
    private Integer phone ;
    private String gender ;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date dob ;
    private Integer age ;
    private String Address ;
    private String state ;
    private String city ;
    private Integer pincode ;
    private String email ;
    private String username ;
    private String password ;
    private String board_10 ;
    private double percent_10 ;
    private String stream_12 ;
    private double percent_12 ;
    private String graduation ;
    private double cgpa ;
    private byte[] file;

    public Teacher() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getPincode() {
        return pincode;
    }

    public void setPincode(Integer pincode) {
        this.pincode = pincode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBoard_10() {
        return board_10;
    }

    public void setBoard_10(String board_10) {
        this.board_10 = board_10;
    }

    public double getPercent_10() {
        return percent_10;
    }

    public void setPercent_10(double percent_10) {
        this.percent_10 = percent_10;
    }

    public String getStream_12() {
        return stream_12;
    }

    public void setStream_12(String stream_12) {
        this.stream_12 = stream_12;
    }

    public double getPercent_12() {
        return percent_12;
    }

    public void setPercent_12(double percent_12) {
        this.percent_12 = percent_12;
    }

    public String getGraduation() {
        return graduation;
    }

    public void setGraduation(String graduation) {
        this.graduation = graduation;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }
}
