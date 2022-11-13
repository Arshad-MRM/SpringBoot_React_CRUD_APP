package com.example.EmployeeExample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeExampleApplication.class, args);
	}

}
