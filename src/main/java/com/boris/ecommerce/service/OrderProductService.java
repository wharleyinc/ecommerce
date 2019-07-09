package com.boris.ecommerce.service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.boris.ecommerce.model.OrderProduct;

public interface OrderProductService {
	
	OrderProduct create(@NotNull(message = "The products for order cannot be null.") @Valid OrderProduct orderProduct);
}
