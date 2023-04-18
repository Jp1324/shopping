import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OffersComponent } from './offers/offers.component';
import { CheckoutComponent } from './checkout/checkout.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/homePage', pathMatch: 'full' },
    { path: 'homePage', component: HomePageComponent },
    { path: 'signupPage', component: SignupComponent },
    { path: 'loginPage', component: LoginpageComponent },
    { path: 'productListPage', component: ProductListComponent },
    { path: 'offerPage', component: OffersComponent },
    { path: 'checkOutPage', component: CheckoutComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
  
  