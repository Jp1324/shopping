import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EsServiceService } from '../service/es-service.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address: ['', [Validators.required]],
    pincode: ['', [Validators.required]]
  });

  private signUpnav: Observable<any>;
  private domainURL:string;
  private signUpData:any[];

  constructor( private fb: FormBuilder, private esService:EsServiceService,private http:HttpClient) { 
    this.domainURL = esService.base_path;
  }

  registerFormSubmit(): void {
    const formData = this.registerForm.value;

    let userDetails = {
      "email" : this.registerForm.get("email")?.getRawValue(),
      "mobileNo" : this.registerForm.get("number")?.getRawValue(),
      "address" : this.registerForm.get("address")?.getRawValue(),
      "pincode" : this.registerForm.get("pincode")?.getRawValue()
    }
    
    this.signUpnav = this.http.post(this.domainURL+'/signup',JSON.stringify(userDetails), this.header);
    this.signUpnav.subscribe(data =>{
      this.signUpData = data;
      console.log("Singup data >> " + JSON.stringify(this.signUpData))
    });
  }

  header = {
    headers: new HttpHeaders(
      {'Content-type':'application/json'}
    )      
  }

  get email(): any {
    return this.registerForm.get('email');
  }
  get number(): any {
    return this.registerForm.get('number');
  }
  get address(): any {
    return this.registerForm.get('address');
  }
  get pincode(): any {
    return this.registerForm.get('pincode');
  }
}