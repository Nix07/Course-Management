import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public response: any;
  public router: any;
  loggedInFlag: string;

  constructor(private loginService: LoginService, _router: Router) { 
    this.router = _router;
  }

  user = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    this.loginService.currentFlag.subscribe( (loggedInFlag: any) => {
      this.loggedInFlag = loggedInFlag;
    });
  }

  submit(){
    this.loginService.checkCredentials(this.user.email, this.user.password).subscribe((response: any) => {
      this.response = response;
      
      if(this.response == true){
        alert("Login Successful!");
        this.loginService.changeValue(true);
        this.router.navigateByUrl('/courses');
      }
      else{
        alert("Incorrect Credentials");
      }
    });
  }
}
