import { Component, OnInit } from '@angular/core';
import { StepperService } from '../services/StepperService';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../services/EcommerceService';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  private step: number;
  private checkoutVisited: boolean;
  private shopDisabled: boolean;

  private sub: Subscription;
  private disableSub: Subscription;

  constructor(private stepperService:StepperService, private ecommerceService:EcommerceService) { }

  ngOnInit() {
    this.step = this.stepperService.Step;
    this.checkoutVisited = false;

    this.sub = this.stepperService.StepChanged.subscribe(() => {
      this.step = this.stepperService.Step;
      if (this.step === 2) {
        this.checkoutVisited = true;
      }

      if (this.step === 3) {
        this.checkoutVisited = false;
        this.shopDisabled = true;
      }
    });
  }

  returnToStore() {
    if (this.checkoutVisited) {
      this.stepperService.Step = 1;
      this.ecommerceService.OrderFinished = false;
    }
  }

  returnToCheckout() {
    if (this.checkoutVisited) {
      this.ecommerceService.OrderFinished = true;
      this.stepperService.Step = 2;
    }
  }


}
