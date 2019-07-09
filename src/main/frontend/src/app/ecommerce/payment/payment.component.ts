import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { StripeService, Elements, Element as StripeElement, ElementsOptions, CardDataOptions } from 'ngx-stripe';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StepperService } from '../services/StepperService';
import { EcommerceService } from '../services/EcommerceService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterViewInit, OnDestroy {
  elements: Elements;
  card: StripeElement;

  stripeTest: FormGroup;
  fname: FormControl;
  lname: FormControl;
  email: FormControl;
  address: FormControl;
  city: FormControl;
  zip: FormControl;
  country: FormControl;

  isProcessing: boolean = false;
  isError: boolean = false;
  errorMessage: string;
  errorStatus: string;

  formModel: any;

  paymentFinished: boolean = false;

  constructor(private fb: FormBuilder, 
    private stripeService: StripeService, 
    private stepperService: StepperService, 
    private ecommerceService: EcommerceService) { }

  ngOnInit() {
    this.fname = new FormControl('', Validators.required);
    this.lname = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.address = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.zip = new FormControl('');
    this.country = new FormControl('', Validators.required);

    this.stripeTest = this.fb.group({
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      address: this.address,
      city: this.city,
      zip: this.zip,
      country: this.country,
    });

    this.stripeService.elements().subscribe(elements => {
      this.elements = elements;

      if (!this.card) {
        this.card = this.elements.create('card', {
          hidePostalCode: true,
          style: {
            base: {
              iconColor: '#666EE8',
              color: '#31325F',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: '1rem',
              '::placeholder': {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    });
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }

  checkout() {
    if (this.stripeTest.status === 'INVALID') {
      return;
    }
    // Disable form and Stepper state 3: User cannot modify order.
    this.isProcessing = true;
    this.stripeTest.disable();
    this.stepperService.Step = 3;

    // TokenData from Stripe API.
    const name = `${this.stripeTest.get('fname').value} ${this.stripeTest.get('lname').value}`;
    const tokenData:CardDataOptions = {
      name,
      address_line1: this.stripeTest.get('address').value,
      address_line2: '',
      address_state: '',
      address_city: this.stripeTest.get('city').value,
      address_zip: this.stripeTest.get('zip').value,
      address_country: '',
    };

    this.stripeService.createToken(this.card, tokenData).subscribe(result => {
      if (result.error) {
        throw new Error(result.error.message);
      }
      // @ts-ignore
      this.ecommerceService.ProductOrders.token = result.token.id;
      // @ts-ignore
      this.ecommerceService.ProductOrders.firstName = this.stripeTest.get('fname').value;
      // @ts-ignore
      this.ecommerceService.ProductOrders.lastName = this.stripeTest.get('lname').value;
      // @ts-ignore
      this.ecommerceService.ProductOrders.email = this.stripeTest.get('email').value;
      // @ts-ignore
      this.ecommerceService.ProductOrders.address = this.stripeTest.get('address').value;
      // @ts-ignore
      this.ecommerceService.ProductOrders.city = this.stripeTest.get('city').value;
      // @ts-ignore
      this.ecommerceService.ProductOrders.country = this.stripeTest.get('country').value;
      // @ts-ignore
      this.ecommerceService.ProductOrders.zip = this.stripeTest.get('zip').value;

      this.formModel = this.stripeTest.getRawValue();

      const res = this.ecommerceService.saveOrder(this.ecommerceService.ProductOrders);
      res.then(res => {
        // @ts-ignore
        this.formModel.id = res.id;
        this.stepperService.Step = 4;
        this.paymentFinished = true;
      }, error => {
        this.handleError(error);
      });
    });
  }

  handleError(error: any) {
    this.isError = true;
    let message = error.error.message;
    message = message.split(';');
    this.errorMessage = message[0];
    this.errorStatus = error.status;
    if (this.errorStatus !== '500') {
      this.isProcessing = false;
      this.stripeTest.enable();
      this.stepperService.Step = 2;
    }
  }

}
