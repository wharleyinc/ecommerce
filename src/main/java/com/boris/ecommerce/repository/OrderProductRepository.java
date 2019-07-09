package com.boris.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import com.boris.ecommerce.model.OrderProduct;
import com.boris.ecommerce.model.OrderProductPK;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {

}
