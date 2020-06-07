import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInFlag = new BehaviorSubject<boolean>(true);
  currentFlag = this.loggedInFlag.asObservable();

  email: any;
  password: any;
  
  constructor(private http: HttpClient) { }

  changeValue(value: boolean){
    this.loggedInFlag.next(value);
  }

  checkCredentials(email, password) {
    const URL = "http://localhost:8080/login";
    return this.http.post(URL, {name: '', email: email, password: password} , {responseType: 'text'}); 
  }
}
