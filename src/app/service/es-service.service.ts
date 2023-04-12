import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsServiceService {
  public base_path = "http://localhost:8080/scart";

  public authHeader:any;
  public token:any;
  public catId:[];


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
     })
   }

   authToken = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'
     })
   }

   jsonauthToken = {
    headers: new HttpHeaders({
      'content-type':'application/json',
      'Authorization': 'Bearer '
     })
   }

   multiPartauthToken = {
    headers: new HttpHeaders({
      'content-type':'multipart/form-data',
      'Authorization': 'Bearer '
     })
   }


   setToken()
   {
    this.authToken.headers = this.authToken.headers.set('Authorization','Bearer ' + this.authHeader);
    console.log("Auth Header :: " + this.authToken.headers.get("Authorization"));
    // return this.token;  
    this.jsonauthToken.headers = this.jsonauthToken.headers.set('Authorization','Bearer ' + this.authHeader);
    this.multiPartauthToken.headers = this.multiPartauthToken.headers.set('Authorization','Bearer ' + this.authHeader);
    }
   constructor(public http: HttpClient) { }

  
}
