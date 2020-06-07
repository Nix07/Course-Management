import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  img_source = "./assets/images/accolite_logo.jpeg";
  loggedInFlag: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentFlag.subscribe( (loggedInFlag: any) => {
      this.loggedInFlag = loggedInFlag;
    });
  }

  logOut(){
    this.loginService.changeValue(false);
  }

}
