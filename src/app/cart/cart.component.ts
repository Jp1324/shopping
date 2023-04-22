import { Component, Inject } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


  constructor(public products: ProductListComponent, public dialog: MatDialog) {
    this.productInCart = products.products;
    this.productCountForcart = products.count;
    this.productTotalPrinceIncart = products.totalPrice;
  }

  onTableCartEdit(item: any) {
    this.productInCart.forEach((element: { isEdit: boolean; }) => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  // service after saving
  onTableCartSave(item: any) {
    console.log("save will happen with service");
    item.isEdit = false;
  }

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(EditOtpModalInCart, {
      width: '350px',
      data: item
    });
  }

}

@Component({
  selector: 'eidtotp-modal',
  templateUrl: '../product-list/editotp-modal.html',
  providers: [ CartComponent,ProductListComponent ]
})
// editotp-modal.html
export class EditOtpModalInCart {
  constructor(public productList: CartComponent, 
    @Inject(MAT_DIALOG_DATA) public data: CartComponent, 
    public dialogRef: MatDialogRef<EditOtpModalInCart>, 
    private fb: FormBuilder) {}

  registerForm: FormGroup = this.fb.group({
    number: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],
  });

  get number(): any {
    return this.registerForm.get('number');
  }

  editTableClose() {
    this.productList.onTableCartEdit(this.data);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
