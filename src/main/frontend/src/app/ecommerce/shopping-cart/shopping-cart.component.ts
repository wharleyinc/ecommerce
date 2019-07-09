import { Component, OnInit, OnDestroy, Output, AfterViewInit } from '@angular/core';
import { ProductOrders } from '../models/product-orders.model';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { EcommerceService } from '../services/EcommerceService';
import { ProductOrder } from '../models/product-order.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy, AfterViewInit {
  orderFinished: boolean;
  orders: ProductOrders;
  total: number;
  sub: Subscription;

  @Output() onOrderFinished: EventEmitter<boolean>;

  constructor(private ecommerceService: EcommerceService) {
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.orders = new ProductOrders();
    this.loadCart();
    this.loadTotal();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    // Auto-scroll to shopping-cart.
      this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
        if (this.ecommerceService.ProductOrders.productOrders.length > 1) {
          return;
        } else {
          setTimeout(() => {
            window.scrollBy({
              top: window.innerHeight * 4,
              left: 0,
              behavior: 'smooth'
            });
          }, 250)
        }
    });
  }

  private calculateTotal(products: ProductOrder[]):number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.product.price * value.quantity);
    });

    return sum;
  }

  loadTotal() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      console.log('orders changed from ShoppingCartComponent')
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  finishOrder() {
    this.orderFinished = true;
    this.ecommerceService.Total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
  }

  loadCart() {
    this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
      let productOrder = this.ecommerceService.SelectedProductOrder;
      if (productOrder) {
        this.orders.productOrders.push(new ProductOrder(productOrder.product, productOrder.quantity, productOrder.size));
      }
      this.ecommerceService.ProductOrders = this.orders;
      this.orders = this.ecommerceService.ProductOrders;
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  removeFromCart(order: ProductOrder) {
    console.log(order);
    let index = this.getProductIndex(order.product);
    console.log(index);

    if (index > -1) {
      this.ecommerceService.ProductOrders.productOrders.splice(index, 1);
    }

    this.total = this.calculateTotal(this.orders.productOrders);

  }

  getProductIndex(product: Product):number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(value => value.product === product);
  }


    reset() {
      this.orderFinished = false;
      this.orders = new ProductOrders();
      this.orders.productOrders = [];
      this.loadTotal();
      this.total = 0;
    }
}

