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
  otpToCompare = "1234" //this is the variable for getting the otp from service.
  correctFormat = false;
  otpValidation = false;
  
  getOTP() {
    let getPhoneNumber = this.phoneNumber;
    console.log(getPhoneNumber); 
    // getPhoneNumber = getPhoneNumber.replace(/[^0-9+#]/g, "");

    // Validates only the length 
    if (getPhoneNumber.length >= 10) {
      this.correctFormat = getPhoneNumber;
      return true;
    }else{
      this.correctFormat = false;
    }
    return false;
  } 

  checkOTP() {
   let otpfromUI = this.otp;
   console.log(otpfromUI); 
   
   // Compares the Otp from UI and from the service 
   if(otpfromUI == this.otpToCompare){
      //Navigation to home/product list page
      console.log("correct");
      return true;
   }else if(otpfromUI == null){
    console.log("the otp field is empty")
    this.otpValidation = false;
   }else{
    this.otpValidation == false;
    return false;
   }
   return false;
  }
}