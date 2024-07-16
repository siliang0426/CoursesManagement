package com.project.courses_management.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.github.cdimascio.dotenv.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.courses_management.exception.resourceNotFoundException;
import com.project.courses_management.model.student;
import com.project.courses_management.repository.studentRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

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

    // create REST api
    @PostMapping("/students")
    public student createStudent(@RequestBody student Student) {
        return StudentRepository.save(Student);
    }

    // Get Student by id rest API
    @GetMapping("/students/{id}")
    public ResponseEntity<student> getStudentById(@PathVariable Long id) {
        student Student = StudentRepository.findById(id)
                .orElseThrow(() -> new resourceNotFoundException("Employee not exist with id: " + id));
        return ResponseEntity.ok(Student);
    }

    // Update Student rest api
    @PutMapping("/students/{id}")
    public ResponseEntity<student> updateStudent(@PathVariable Long id, @RequestBody student updateStudent) {
        student Student = StudentRepository.findById(id)
                .orElseThrow(() -> new resourceNotFoundException("Student not exist with id: " + id));
        if (!updateStudent.getFirstName().equals(""))
            Student.setFirstName(updateStudent.getFirstName());
        if (!updateStudent.getLastName().equals(""))
            Student.setLastName(updateStudent.getLastName());
        if (!updateStudent.getEmailId().equals(""))
            Student.setEmailId(updateStudent.getEmailId());

        student updated = StudentRepository.save(Student);
        return ResponseEntity.ok(updated);
    }

    // Delete Student rest api
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id) {
        student Student = StudentRepository.findById(id)
                .orElseThrow(() -> new resourceNotFoundException("Student not exist with id: " + id));

        StudentRepository.delete(Student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
