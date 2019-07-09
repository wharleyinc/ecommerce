package com.boris.ecommerce.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boris.ecommerce.model.Order;
import com.boris.ecommerce.repository.OrderRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	private OrderRepository orderRepository;
	
	@Autowired
	public OrderServiceImpl(OrderRepository orderRepository) {
		this.orderRepository = orderRepository;
	}
	
	@Override
	public Iterable<Order> getAllOrders() {
		return this.orderRepository.findAll();
	}

	@Override
	public Order create(Order order) {
		order.setDateCreated(LocalDate.now());
		
		return this.orderRepository.save(order);
	}

	@Override
	public void update(Order order) {
		this.orderRepository.save(order);
	}

}
