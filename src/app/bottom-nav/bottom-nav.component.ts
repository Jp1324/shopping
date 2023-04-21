import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})

export class BottomNavComponent {
  productCount: number;
  totalPrice: number;

  constructor(public dialog: MatDialog, public products: ProductListComponent) {
     this.productCount = products.count;
     this.totalPrice= products.totalPrice;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BottomModal, {
      width: '350px'
    });
  }
}

// Angular material modal
@Component({
  selector: 'bottom-modal',
  templateUrl: 'bottom-modal.component.html',
})

export class BottomModal {
  constructor(
    public dialogRef: MatDialogRef<BottomModal>) {

  }
}


