package com.project.courses_management.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.courses_management.model.student;

@Repository
public interface studentRepository extends JpaRepository<student, Long> {

}
