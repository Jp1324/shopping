import { Component, EventEmitter, Input, Output } from '@angular/core';
import productListData from './product-list.json';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public dialog: MatDialog) {}

  onTableEdit(item: any) {
    this.products.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  onTableSave(item: any) {
    console.log("save will happen with service");
    item.isEdit = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditOtpModal, {
      width: '350px'
    });
  }
}

@Component({
  selector: 'eidtotp-modal',
  templateUrl: 'editotp-modal.html',
})

export class EditOtpModal {
  constructor(
    public dialogRef: MatDialogRef<EditOtpModal>, private fb: FormBuilder ) {   
    }

  registerForm: FormGroup = this.fb.group({
    number: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],
  });

  get number(): any {
    return this.registerForm.get('number');
  }

}
