package com.boris.ecommerce.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.boris.ecommerce.dto.OrderProductDto;
import com.boris.ecommerce.exception.ResourceNotFoundException;
import com.boris.ecommerce.model.Order;
import com.boris.ecommerce.model.OrderProduct;
import com.boris.ecommerce.model.OrderStatus;
import com.boris.ecommerce.service.OrderProductService;
import com.boris.ecommerce.service.OrderService;
import com.boris.ecommerce.service.ProductService;
import com.boris.ecommerce.service.StripeService;
import com.stripe.exception.CardException;
import com.stripe.exception.StripeException;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	private Logger logger = LoggerFactory.getLogger(OrderController.class);

	private ProductService productService;
	private OrderService orderService;
	private OrderProductService orderProductService;
	private StripeService stripeService;
	
	@Autowired
	public OrderController(ProductService productService, OrderService orderService,
			OrderProductService orderProductService, StripeService stripeService) {
		this.productService = productService;
		this.orderService = orderService;
		this.orderProductService = orderProductService;
		this.stripeService = stripeService;
	}
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public @NotNull Iterable<Order> list() {
		return this.orderService.getAllOrders();
	}
	
	@PostMapping
	public ResponseEntity<?> create(@RequestBody OrderForm form) {
		List<OrderProductDto> formDtos = form.getProductOrders();
		validateProductsExistence(formDtos);
		
		Order order = new Order();
		
		order.setStatus(OrderStatus.PAID.name());
		order.setFirstName(form.getFirstName());
		order.setLastName(form.getLastName());
		order.setEmail(form.getEmail());
		order.setAddress(form.getAddress());
		order.setCity(form.getCity());
		order.setZip(form.getZip());
		order.setCountry(form.getCountry());
		
		order = this.orderService.create(order);
		
		List<OrderProduct> orderProducts = new ArrayList<>();
		for (OrderProductDto dto : formDtos) {
			orderProducts.add(orderProductService.create(
					new OrderProduct(
							order, 
							productService.getProduct(dto.getProduct().getId()), 
							dto.getQuantity()))
					);
		}
		
		order.setOrderProducts(orderProducts);
		
		int amount = order.getTotalOrderPriceInCents();

		try {
			stripeService.createCharge(amount, StripeService.Currency.EUR, form.getToken());
		} catch (StripeException e) {
			throw new ResponseStatusException(HttpStatus.valueOf(e.getStatusCode()), e.getMessage(), e);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Oops, our servers are currently experiencing problems. Please try again later!", e);
		}
		
		this.orderService.update(order);
		
		String uri = ServletUriComponentsBuilder
				.fromCurrentServletMapping()
				.path("/orders/{id}")
				.buildAndExpand(order.getId())
				.toString();
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Location", uri);
		
		return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
	}
	
	private void validateProductsExistence(List<OrderProductDto> orderProducts) {
		List<OrderProductDto> list = orderProducts
				.stream()
				.filter(op -> Objects.isNull(productService.getProduct(op.getProduct().getId())))
				.collect(Collectors.toList());
		
		if (!CollectionUtils.isEmpty(list)) {
			new ResourceNotFoundException("Product not found");
		}
	}
	
	public static class OrderForm {
		
		private List<OrderProductDto> productOrders;
		private String token;
		private String firstName;
		private String lastName;
		private String email;
		private String address;
		private String city;
		private String country;
		private String zip;
		
		public List<OrderProductDto> getProductOrders() {
			return productOrders;
		}
		
		public void setProductOrders(List<OrderProductDto> productOrders) {
			this.productOrders = productOrders;
		}
		
		public void setToken(String token) {
			this.token = token;
		}
		
		public String getToken() {
			return token;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getCountry() {
			return country;
		}

		public void setCountry(String country) {
			this.country = country;
		}

		public String getZip() {
			return zip;
		}

		public void setZip(String zip) {
			this.zip = zip;
		}
	}
}
