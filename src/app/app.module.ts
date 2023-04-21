import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

// All the component imports
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomModal, BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { OffersComponent } from './offers/offers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { ComplimentsComponent } from './compliments/compliments.component';
import { CartComponent } from './cart/cart.component';

//Angular material imports 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ProductListComponent,
    TopNavComponent,
    HomePageComponent,
    BottomNavComponent,
    SignupComponent,
    OffersComponent,
    CheckoutComponent,
    ComplimentsComponent,
    CartComponent,
    BottomModal
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
