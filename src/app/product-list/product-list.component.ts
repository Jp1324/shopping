import { AfterViewInit, Component, HostListener, Inject, ViewChild } from '@angular/core';
import productListData from './product-list.json';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Product {
  id: Number;  
  name: String;  
  price: number;
  imagePath: String,
  quantity: number,
  expireDate: String,
  isEdit: boolean
}
const products: Product[] = productListData;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements AfterViewInit {

  products: Product[] = productListData;
  count = Object.keys(products).length;  
  totalPrice = products.reduce((sum, item)=>sum + item.price,0);

  constructor(public dialog: MatDialog) {}

  onTableEdit(item: any) {
    products.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  onTableSave(item: any) {
    console.log("save will happen with service");
    item.isEdit = false;
  }

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(EditOtpModal, {
      width: '350px',
      data: item
    });
  }

  displayedColumns: string[] = ["id", "name", "price", "quantity", "expireDate", "isEdit"];
  dataSource = new MatTableDataSource<Product>(products)

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

@Component({
  selector: 'eidtotp-modal',
  templateUrl: 'editotp-modal.html',
  providers: [ ProductListComponent ]
})

export class EditOtpModal {
  constructor(public productList: ProductListComponent, 
    @Inject(MAT_DIALOG_DATA) public data: ProductListComponent, 
    public dialogRef: MatDialogRef<EditOtpModal>, 
    private fb: FormBuilder) {}

  registerForm: FormGroup = this.fb.group({
    number: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],
  });

  get number(): any {
    return this.registerForm.get('number');
  }

  editTableClose() {
    this.productList.onTableEdit(this.data);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
