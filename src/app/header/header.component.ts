import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedInFlag: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentFlag.subscribe( (loggedInFlag: any) => {
      this.loggedInFlag = loggedInFlag;
    });
  }

  img_source = "./assets/images/accolite_logo.jpeg";

}
