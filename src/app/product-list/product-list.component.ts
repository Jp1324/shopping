import { Component } from '@angular/core';
import productListData from './product-list.json';

interface Product {
  id: Number;  
  name: String;  
  price: number;
  imagePath: String,
  quantity: number,
  expireDate: String
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  products: Product[] = productListData;
  count = Object.keys(this.products).length;  

  totalPrice = this.products.reduce((sum, item)=>sum + item.price,0);
}
