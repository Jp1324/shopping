import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-compliments',
  templateUrl: './compliments.component.html',
  styleUrls: ['./compliments.component.css'],
  providers: [ProductListComponent]
})
export class ComplimentsComponent {
  
  countInCompliments: number;
  totalPriceInCompliments : number;

  constructor(public products: ProductListComponent) {
    this.countInCompliments = products.count;
    this.totalPriceInCompliments = products.totalPrice;
  }
}
