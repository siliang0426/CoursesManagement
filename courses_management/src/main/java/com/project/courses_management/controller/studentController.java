package com.project.courses_management.controller;

import java.util.List;

import io.github.cdimascio.dotenv.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.courses_management.model.student;
import com.project.courses_management.repository.studentRepository;

@RestController
@RequestMapping("/api/v1/")
public class studentController {

    @Autowired
    private studentRepository StudentRepository;

    // get all student
    @GetMapping("/students")
    public List<student> getAllStudent() {
        return StudentRepository.findAll();
    }
}
