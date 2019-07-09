package com.boris.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import com.boris.ecommerce.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
