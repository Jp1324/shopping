import { Component,OnInit,ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import productOfferData from './offers.json';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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


export class OffersComponent implements OnInit{

  displayedColumns = ['name','currentPrice','discountedPrice','discount'];
  dataSource = new MatTableDataSource<ProductOffers>(productOfferData);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  productOfferData: ProductOffers[] = productOfferData;

  productCountInOffers: number;
  totalPriceInOffers: number;

  constructor(public products: ProductListComponent) {
    this.productCountInOffers = products.count;
    this.totalPriceInOffers = products.totalPrice;
 }
}
