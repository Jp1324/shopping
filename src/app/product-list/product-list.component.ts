import { Component } from '@angular/core';
import productListData from './product-list.json';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

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

  onEdit(item: any) {
    this.products.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
}
