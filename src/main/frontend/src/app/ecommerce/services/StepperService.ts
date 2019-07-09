import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StepperService {

    private step:number = 1;
    private checkoutVisited:boolean = false;
    private shopDisabled:boolean = false;
    
    private stepSubject = new Subject();
    private shopDisabledSubject = new Subject();

    StepChanged = this.stepSubject.asObservable();
    ShopDisabledChanged = this.shopDisabledSubject.asObservable();

    set Step(step: number) {
        this.step = step;
        this.stepSubject.next();
    }

    get Step():number {
        return this.step;
    }

    visitCheckout() {
        this.checkoutVisited = true;
    }

    // disableShop() {
    //     this.shopDisabled = true;
    // }

}