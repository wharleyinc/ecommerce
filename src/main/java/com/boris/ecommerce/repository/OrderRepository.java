package com.boris.ecommerce.repository;
import org.springframework.data.repository.CrudRepository;
import com.boris.ecommerce.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}
