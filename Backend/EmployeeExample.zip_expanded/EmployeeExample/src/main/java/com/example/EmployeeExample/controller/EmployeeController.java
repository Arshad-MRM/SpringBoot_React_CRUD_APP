package com.example.EmployeeExample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.EmployeeExample.entity.Employee;
import com.example.EmployeeExample.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	@Autowired
    private EmployeeService service;
	
	@PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee emp) {
		System.out.println("_---_: " + emp.getEmployeename());
        return service.saveEmployee(emp);
    }
	
	@GetMapping("/employees")
    public List<Employee> findAllEmployees() {
        return service.getEmployees();
    }
	
	@GetMapping("/employeeById/{id}")
    public Employee findEmployeeById(@PathVariable long id) {
        return service.getEmployeeById(id);
    }
	
	@PutMapping("/update")
    public Employee updateEmployee(@RequestBody Employee emp) {
        return service.updateEmployee(emp);
    }
	
	@DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id) {
        return service.deleteProduct(id);
    }
	
	
}
