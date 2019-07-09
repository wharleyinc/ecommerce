import { ProductOrder } from '../models/product-order.model';
import { ProductOrders } from '../models/product-orders.model';

import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EcommerceService {

    private productsUrl = "/api/products";
    private ordersUrl = "/api/orders";

    private productOrder: ProductOrder;
    private orders:ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();
    private orderFinishedSubject = new Subject();

    private total: number;

    // Used to toggle between Shop --> Checkout pages.
    private orderFinished:boolean = false;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();
    OrderFinishedChanged = this.orderFinishedSubject.asObservable();

    constructor(private http:HttpClient) {

    }

    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order).toPromise();
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        console.log(value.productOrders)
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }

    set OrderFinished(value: boolean) {
        this.orderFinished = value;
        this.orderFinishedSubject.next();
    }

    get OrderFinished() {
        return this.orderFinished;
    }
}