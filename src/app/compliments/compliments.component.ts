import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import complimentsListData from './compliments.json';


interface Compliments {
  id: Number;  
  name: String;  
  price: number;
  compliment: String,
  endDate: String,
  isEdit: boolean
}

@Component({
  selector: 'app-compliments',
  templateUrl: './compliments.component.html',
  styleUrls: ['./compliments.component.css'],
  providers: [ProductListComponent]
})

export class ComplimentsComponent {
  
  complimentlist: Compliments[] = complimentsListData;
  count = Object.keys(this.complimentlist).length; 

  countInCompliments: number;
  totalPriceInCompliments : number;

  constructor(public products: ProductListComponent) {
    this.countInCompliments = products.count;
    this.totalPriceInCompliments = products.totalPrice;
  }


}
