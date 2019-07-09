package com.boris.ecommerce.service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boris.ecommerce.model.OrderProduct;
import com.boris.ecommerce.repository.OrderProductRepository;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

	private OrderProductRepository orderProductRepository;
	
	public OrderProductServiceImpl(OrderProductRepository orderProductRepository) {
		this.orderProductRepository = orderProductRepository;
	}
	
	@Override
	public OrderProduct create(OrderProduct orderProduct) {
		return this.orderProductRepository.save(orderProduct);
	}

}
