import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email: any;
  password: any;
  constructor(private http: HttpClient) { }

  checkCredentials(email, password) {
    const URL = "http://localhost:8080/login";
    return this.http.post(URL, {name: '', email: email, password: password} , {responseType: 'text'}); 
  }
}
