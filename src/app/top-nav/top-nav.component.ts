import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css','../app.component.css']
})
export class TopNavComponent {

  productCountForTopNav: number;
  
  constructor(public products: ProductListComponent) {
    this.productCountForTopNav = products.count;
  }
}
