import { Component,OnInit,ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import productOfferData from './offers.json';

interface ProductOffers {
  id: Number;  
  name: String;  
  currentPrice: number;
  discount: String,
  discountedPrice: String,
}


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [ ProductListComponent ]
})


export class OffersComponent {

  productOfferData: ProductOffers[] = productOfferData;

  productCountInOffers: number;
  totalPriceInOffers: number;

  constructor(public products: ProductListComponent) {
    this.productCountInOffers = products.count;
    this.totalPriceInOffers = products.totalPrice;
 }
}
