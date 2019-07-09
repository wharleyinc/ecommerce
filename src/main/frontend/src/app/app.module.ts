import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';
import {ProductsComponent} from './ecommerce/products/products.component';
import {ShoppingCartComponent} from './ecommerce/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './ecommerce/orders/orders.component';
import {EcommerceService} from "./ecommerce/services/EcommerceService";
import { BillingComponent } from './ecommerce/billing/billing.component';
import { PaymentComponent } from './ecommerce/payment/payment.component';

import { NgxStripeModule } from 'ngx-stripe';
import { StepperComponent } from './ecommerce/stepper/stepper.component';
import { StepperService } from './ecommerce/services/StepperService';
import { SuccessComponent } from './ecommerce/success/success.component';

const appRoutes: Routes = [
    {
      path: '',
      component: EcommerceComponent,
    },
];
  

@NgModule({
    declarations: [
        AppComponent,
        EcommerceComponent,
        ProductsComponent,
        ShoppingCartComponent,
        OrdersComponent,
        BillingComponent,
        PaymentComponent,
        StepperComponent,
        SuccessComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        ),
        NgxStripeModule.forChild('pk_test_LYR0rKmCAwHjTuMjvGnz8jQ000088t2byd')
    ],
    providers: [EcommerceService, StepperService],
    bootstrap: [AppComponent]
})
export class AppModule {
}