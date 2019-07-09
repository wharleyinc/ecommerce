package com.boris.ecommerce;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.boris.ecommerce.model.Product;
import com.boris.ecommerce.model.ProductCategory;
import com.boris.ecommerce.service.ProductService;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}
	
    @Bean
    CommandLineRunner runner(ProductService productService) {
        return args -> {
            productService.save(new Product(1L, "Nike Air Max 270 React", 160.00, "https://i.imgur.com/dDNiBBt.jpg", "Inspired by Bauhaus art, the Nike Air Max 270 React merges functionality with art so you can step between worlds.", "Nike", ProductCategory.SHOES.name(), "Red/Black/University Gold"));
            productService.save(new Product(2L, "Stripe Wool Sweater", 305.00, "https://i.imgur.com/rW7ur45.jpg", "Bright, slim stripes ring a sweater knit from soft, breathable merino wool for a look that's great layered yet comfortable on its own.", "A.P.C.", ProductCategory.CLOTHES.name(), "Ecru"));
            productService.save(new Product(3L, "Modern Chino Shorts", 39.00, "https://i.imgur.com/Wm694Fo.jpg", "Slim-fit chino shorts are crafted from a smooth blend of cotton and recycled material for a casual cool look for the eco-minded.", "VOLCOM", ProductCategory.CLOTHES.name(), "Indigo"));
            productService.save(new Product(4L, "'Rover' Backpack", 130.00, "https://i.imgur.com/ig0HGIt.jpg", "This essential backpack functions as a trusty school or work companion to store and carry your daily-use essentials, including a laptop.", "TOPO DESIGNS", ProductCategory.BAG.name(), "Navy/Red"));
            productService.save(new Product(5L, "Tralnn Chelsea Boot", 189.00, "https://i.imgur.com/IaYPWhz.jpg", "Smart elastic inserts mean an easy fit in a stylish Chelsea boot with a fully molded sole for superior comfort.", "Ted Baker London", ProductCategory.SHOES.name(), "Tan Suede"));
            productService.save(new Product(6L, "Falster 2 Touchscreen Mesh", 280.00, "https://i.imgur.com/RNskfdu.jpg", "A clean, battery-efficient display shows time, date, heart rate and power on this tech-savvy smart watch powered by Wear OS by Google.", "SKAGEN", ProductCategory.WATCH.name(), "Gunmetal"));
        };
    }
}
