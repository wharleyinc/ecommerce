import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductOrder } from '../models/product-order.model';
import { Product } from '../models/product.model';
import { ProductOrders } from '../models/product-orders.model';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../services/EcommerceService';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;

  isInvalid: boolean = false;

  orderFinished: boolean;
  @Output() onOrderFinished: EventEmitter<boolean>;

  @ViewChild('divToScroll', { read: true, static: false }) divToScroll: ElementRef;
  
  constructor(private ecommerceService: EcommerceService) { 
    this.onOrderFinished = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  ngAfterViewInit() {
    
  }

  addToCart(order: ProductOrder) {
    if (order.quantity === 0) {
      order.quantity = 1;
    }
    
    if (order.product.category === 'SHOES' && order.size === 'N/A') {
      this.isInvalid = true;
      return;
    }

    if (order.product.category === 'CLOTHES' && order.size === 'N/A') {
      this.isInvalid = true;
      return;
    }

    this.isInvalid = false;

    if (this.ecommerceService.ProductOrders.productOrders.length === 0) {
      this.addToCartService(order);
    } else {
      this.checkDuplicates(order);
    }

    // document.getElementById('bottom').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  addToCartService(order: ProductOrder) {
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  checkDuplicates(order: ProductOrder) {
    this.ecommerceService.ProductOrders.productOrders.forEach((item) => {
      if (item.product.id === order.product.id) {
        this.shoppingCartOrders.productOrders.splice(this.getProductIndex(item.product), 1);
      }
    });

    this.addToCartService(order);
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > 1) {
      this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product):number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(value => value.product === product);
  }

  isProductSelected(product: Product):boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.ecommerceService.getAllProducts().subscribe(
      (products: any[]) => {
        this.products = products;
        this.products.forEach(product => {
          this.productOrders.push(new ProductOrder(product, 0, 'N/A'));
        })
      }, (error) => {
        console.log(error);
      }
    );
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
      console.log('orders changed from ProductsComponent')
      console.log(this.shoppingCartOrders)
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }

  scroll(element: any) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  addToCartAndFinishOrder(order: ProductOrder) {
    this.addToCart(order);
    if (!this.isInvalid) {
      this.orderFinished = true;
      this.ecommerceService.Total = this.calculateTotal(this.ecommerceService.ProductOrders.productOrders);
      this.onOrderFinished.emit(this.orderFinished);
    }
  }

  private calculateTotal(products: ProductOrder[]):number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.product.price * value.quantity);
    });

    return sum;
  }

}
