package com.example.EmployeeExample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.EmployeeExample.entity.Employee;
import com.example.EmployeeExample.repository.EmployeeRepository;


@Service
public class EmployeeService {

	
	@Autowired
	private EmployeeRepository repository;
	
	
	public List<Employee> getEmployees() {
        return repository.findAll();
    }
	
	public Employee saveEmployee(Employee emp) {
		System.out.println("_--Service-_: " + emp.getEmployeename());
        return repository.save(emp);
    }
	
	public Employee getEmployeeById(long id) {
        return repository.findById(id).orElse(null);
    }
	
	public String deleteProduct(long id) {
        repository.deleteById(id);
        return "employee removed !! " + id;
    }
	
	public Employee updateEmployee(Employee emp) {
        Employee existingEmployee = repository.findById(emp.getId()).orElse(null);
        existingEmployee.setEmployeename(emp.getEmployeename());
        existingEmployee.setAddress(emp.getAddress());
        existingEmployee.setSalary(emp.getSalary());
        return repository.save(existingEmployee);
    }
	
}
