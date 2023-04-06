import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: [
    './loginpage.component.css',
    '../app.component.css']
})

export class LoginpageComponent {
  phoneNumber: any;
  otp: any;
  getOTP() {
    const getPhoneNumber = this.phoneNumber;
    console.log(getPhoneNumber);
  }

  checkOTP() {
   
  }
}