import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  loggedInFlag: boolean;
  courses: any;
  img_source = "./assets/images/courses.jpg";

  constructor(private loginService: LoginService, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loginService.currentFlag.subscribe( (loggedInFlag: any)  => {
      this.loggedInFlag = loggedInFlag;
    });

    this.coursesService.getAllCourses().subscribe((courses: any) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }
}
