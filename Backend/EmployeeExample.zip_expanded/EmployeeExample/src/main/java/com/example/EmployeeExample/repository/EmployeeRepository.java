package com.example.EmployeeExample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.EmployeeExample.entity.Employee;



public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
