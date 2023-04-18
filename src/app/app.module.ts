import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { OffersComponent } from './offers/offers.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CheckoutComponent } from './checkout/checkout.component';

 
const appRoutes: Routes = [
  { path: 'homePage', component: HomePageComponent},
  { path: 'signupPage', component: SignupComponent },
  { path: 'loginPage', component: LoginpageComponent },
  { path: 'productListPage', component: ProductListComponent },
  { path: 'offerPage', component: OffersComponent },
  { path: 'checkOutPage', component: CheckoutComponent },
];

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
    CheckoutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
