package com.example.spring.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.spring.model.DonorDetails;

public interface DonorDao extends CrudRepository<DonorDetails,String> {

}
