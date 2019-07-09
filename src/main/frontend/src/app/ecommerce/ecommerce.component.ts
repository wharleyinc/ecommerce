import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EcommerceService } from './services/EcommerceService';
import { Subscription } from 'rxjs';
import { StepperService } from './services/StepperService';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit, AfterViewInit {

  private collapsed = true;
  orderFinished = false;
  sub: Subscription;

  @ViewChild('productsC', { read: true, static: false })
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC', { read: true, static: false })
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('shoppingCartC', { read: true, static: false }) shoppingCartEl: ElementRef;

  @ViewChild('ordersC', { read: true, static: false })
  ordersC: OrdersComponent;

  toggleCollapsed():void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    // this.orderFinished = orderFinished;
    this.ecommerceService.OrderFinished = orderFinished;
    this.orderFinished = this.ecommerceService.OrderFinished;

    this.stepperService.Step = 2;
    this.stepperService.visitCheckout();
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }

  constructor(private ecommerceService: EcommerceService, private stepperService: StepperService) { }

  ngOnInit() {
    this.sub = this.ecommerceService.OrderFinishedChanged.subscribe(() => {
      this.orderFinished = this.ecommerceService.OrderFinished;
    });
  }

  ngAfterViewInit() {
    
    // this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
    //   console.log('Eccomerce component ... ordersChanged event');
    //   console.log(this.shoppingCartEl.nativeElement);
    //   this.shoppingCartEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    // });
  }



}
