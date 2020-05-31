import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  loggedInFlag: string;
  courses = ['Java Core', 'Spring', 'Angular', 'DMBS', 'UNIX'];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentFlag.subscribe( (loggedInFlag: any)  => {
      this.loggedInFlag = loggedInFlag;
    });
  }

  img_source = "./assets/images/courses.jpg";

}
