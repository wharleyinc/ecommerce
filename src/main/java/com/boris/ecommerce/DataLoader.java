package com.boris.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.boris.ecommerce.model.Product;
import com.boris.ecommerce.service.ProductService;

@Component
public class DataLoader implements CommandLineRunner {

	private ProductService productService;
	
	@Autowired
	public DataLoader(ProductService productService) {
		this.productService = productService;
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Data Loader CLR");
	}

}
