import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ ProductListComponent ]
})
export class CartComponent {

  productCountForcart: number;
  productTotalPrinceIncart : number;
  productInCart:any;


  constructor(public products: ProductListComponent) {
    this.productInCart = products.products;
    this.productCountForcart = products.count;
    this.productTotalPrinceIncart = products.totalPrice;
  }

  onTableCartEdit(item: any) {
    this.productInCart.forEach((element: { isEdit: boolean; }) => {
      element.isEdit = false;
      console.log("hi");
    });
    item.isEdit = true;
  }

  // service after saving
  onTableCartSave(item: any) {
    console.log("save will happen with service");
    item.isEdit = false;
  }

}
