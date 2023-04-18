import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ ProductListComponent ]
})
export class CheckoutComponent {

  checkoutForm: FormGroup = this.fb.group({
    number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  });

  productCountInCheckIn: number;
  totalPriceInCheckIn: number;
  
  constructor(public products: ProductListComponent, private fb: FormBuilder) {
    this.productCountInCheckIn = products.count;
    this.totalPriceInCheckIn = products.totalPrice;
  }

  sendReceipt(): void{
    let mobileNoFromCheckout = {
      "mobileNo" : this.checkoutForm.get("number")?.getRawValue(),
    }
    console.log("mobile number>>" + this.checkoutForm.get("mobileNo")?.getRawValue());
  }


  get number(): any {
    return this.checkoutForm.get('number');
  }
}
