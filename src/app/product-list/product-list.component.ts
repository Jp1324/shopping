import { Component } from '@angular/core';
import productListData from './product-list.json';

interface Product {
  id: Number;  
  name: String;  
  price: number;
  imagePath: String,
  quantity: number,
  expireDate: String,
  isEdit: boolean
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

  onTableEdit(item: any) {
    this.products.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  // service after saving
  onTableSave(item: any) {
    console.log("save will happen with service");
    item.isEdit = false;
  }
}
