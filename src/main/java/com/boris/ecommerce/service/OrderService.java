package com.boris.ecommerce.service;

import com.boris.ecommerce.model.Order;

public interface OrderService {
	
	public Iterable<Order> getAllOrders();
	public Order create(Order order);
	public void update(Order order);
}
