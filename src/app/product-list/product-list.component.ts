import { Component } from '@angular/core';
import productListData from './product-list.json';

interface Product {
  id: Number;  
  name: String;  
  price: Number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products: Product[] = productListData;
}
