package com.example.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.spring.dao.DonorDao;
import com.example.spring.model.DonorDetails;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/donor")
@EnableJpaRepositories(basePackageClasses= {DonorDao.class})
public class Controller {
	@Autowired
	private DonorDao dao;
	@PostMapping("/sendDetails")
	public String saveData(@RequestBody DonorDetails donor)
	{
		dao.save(donor);
		return "Registration Successfull";
	}
	@GetMapping("/getDonorDetails")
	public List<DonorDetails> getDonorData(){
		return (List<DonorDetails>)dao.findAll();
	}
	

}
