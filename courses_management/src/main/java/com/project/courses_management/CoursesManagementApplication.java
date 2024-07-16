package com.project.courses_management;

import io.github.cdimascio.dotenv.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CoursesManagementApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();

		System.setProperty("spring.datasource.password", dotenv.get("spring_mysql_password"));
		SpringApplication.run(CoursesManagementApplication.class, args);
	}

}
