package com.boris.ecommerce.model;

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.Valid;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "orders")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "orderProducts")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@JsonFormat(pattern = "dd/MM/YYYY")
	private LocalDate dateCreated;
	
	private String status;
	private String firstName;
	private String lastName;
	private String email;
	private String address;
	private String city;
	private String country;
	private String zip;
	
	@OneToMany(mappedBy = "pk.order", cascade = {CascadeType.ALL})
	@Valid
	private List<OrderProduct> orderProducts = new ArrayList<>();
	
	@Transient
	public Double getTotalOrderPrice() {
		double sum = 0D;
		List<OrderProduct> orderProducts = getOrderProducts();
		for (OrderProduct op : orderProducts) {
			sum += op.getTotalPrice();
		}
		
		return sum;
	}
	
	@Transient
	public int getTotalOrderPriceInCents() {
		double sum = getTotalOrderPrice();
		// Removes any past 2 decimal places.
		sum = sum * 100;
		int cents = (int) sum;
 		return cents;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public LocalDate getDateCreated() {
		return dateCreated;
	}
	
	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public List<OrderProduct> getOrderProducts() {
		return orderProducts;
	}
	
	public void setOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}
	
	@Transient
	public int getNumberofProducts() {
		return this.orderProducts.size();
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
