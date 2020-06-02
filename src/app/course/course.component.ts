import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course = {
    id: '',
    courseName: '',
    description: '',
    preRequisite: '',
    instructorName: ''
  }

  courseDetails: any;
  img_source = "./assets/images/courses.jpg";
  loggedInFlag: any;
  router: any;
  constructor(private loginService: LoginService, private route: ActivatedRoute, private coursesService: CoursesService, _router: Router) {
    this.router = _router;
   }

  ngOnInit(): void {
    this.loginService.currentFlag.subscribe( (loggedInFlag: any)  => {
      this.loggedInFlag = loggedInFlag;
    });
    
    this.course.courseName = this.route.snapshot.paramMap.get("name");

    this.coursesService.getCourseByName(this.course.courseName).subscribe((response: any) => {
      this.courseDetails = response;
    });
  }

  deleteCourse(){
    this.coursesService.deleteCourseByName(this.course.courseName).subscribe((response: any) => {
      if(response){
        this.router.navigateByUrl('/courses');
      }
      else{
        alert(this.course.courseName + " could not be deleted!")
      }
    });
  }

  editCourse(){
    if(this.course.preRequisite.indexOf(",") == -1){
      this.course.preRequisite = this.course.preRequisite + ',';
    }
    console.log(this.course);
    this.coursesService.editCourseByName(this.course).subscribe((response: any) => {
      if(response){
        alert('Edit successful');
        this.router.navigateByUrl('/courses');
      }
      else{
        alert('Edit unsuccessful');
      }
    });
  }
}
