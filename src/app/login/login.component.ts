import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public response: any;
  constructor(private loginService: LoginService) { }

  user = {
    email: '',
    password: ''
  };

  submit(){
    this.loginService.checkCredentials(this.user.email, this.user.password).subscribe((response: any) => {
      this.response = response;
      if(this.response == 'true'){
        alert("Login Successful!");
      }
      else{
        alert("Incorrect Credentials");
      }
    });
  }

  ngOnInit(): void {
  }

}
