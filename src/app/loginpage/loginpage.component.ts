import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './userModel';
import { Observable } from 'rxjs';
import { EsServiceService } from '../service/es-service.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebsocketService } from '../service/websocket.service';




@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: [
    './loginpage.component.css',
    '../app.component.css']
})

export class LoginpageComponent implements OnInit {
  phoneNumber: any;
  userInfo= {} as User;
  otp: any;
  requiredForm: FormGroup;
  // websocket var
  received = [];
  content = '';
  sent = [];

  private mobNo: Observable <any>;
  private mobNoData:any[];
  private loginnav: Observable<any>;
  public loginData:any[];
  private domainURL:string;

  constructor(private fb: FormBuilder, private esService:EsServiceService,private http:HttpClient,
    private router:Router, private WebsocketService: WebsocketService) {
      this.domainURL = esService.base_path;

      // webSocet trial 
      WebsocketService.messages.subscribe(msg => {
        this.received.push(msg);
        console.log("Response from websocket: " + msg);
      });
  
  }
  
  ngOnInit(){   
    this.requiredForm = this.fb.group({
      phoneNumber: ["",
        [Validators.required,
        Validators.pattern('(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]
      ],
      otp:["",
        [Validators.required,
          Validators.pattern('([0-9]{3,4})')]
      ]
    });
  }

  header = {
    headers: new HttpHeaders(
      {'Content-type':'application/json'}
    )      
  }

  getOTP() {
    let otpData = {
      "phone": this.requiredForm.get("phoneNumber")?.getRawValue()
    }

    // websocket trial
    let message = {
      source: '',
      content: ''
    };
    message.source = 'websocket trail 1st try';
    message.content = otpData.phone;

    this.sent.push(message);
    this.WebsocketService.messages.next(message);

    // http 
    // this.mobNo = this.http.post(this.domainURL+'/login/genotpweb',JSON.stringify(otpData), this.header);
    // this.mobNo.subscribe( data => {
    //   this.mobNoData = data;
    //   console.log("otp Res >> " + JSON.stringify(this.mobNoData));
    // });
    // return false;
  }

  checkOTP() {
   const newUser: User = {
    login: this.requiredForm.get("phoneNumber")?.getRawValue(),
    otp: this.requiredForm.get("otp")?.getRawValue()
   } as User;

   let login = {
    "phone": this.requiredForm.get("phoneNumber")?.getRawValue(),
    "otp": this.requiredForm.get("otp")?.getRawValue()
    }

    this.loginnav = this.http.post(this.domainURL+'/login',JSON.stringify(login), this.header);

    this.loginnav.subscribe(async data => {
      this.loginData = data;
      console.log("login Res Data >> " + JSON.stringify(this.loginData));
      //navigation part here
    });
  }

}