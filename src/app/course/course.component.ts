import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { LoginService } from '../login.service';
import { TrainingMaterialsService } from '../training-materials.service';

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
  trainingMaterials: any;
  confirmation: boolean;
  material = {
    id: -1,
    courseName: '',
    link: ''
  }

  constructor(private loginService: LoginService, private route: ActivatedRoute, private coursesService: CoursesService, _router: Router, private trainingService: TrainingMaterialsService) {
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

    this.trainingService.getTrainingMaterialsByCourseName(this.course.courseName).subscribe((response: any) => {
      this.trainingMaterials = response;
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

  editTrainingMaterial(currentMaterial: any){
    currentMaterial.link = prompt('Please enter new training material\'s link', currentMaterial.link);
    this.confirmation = confirm("Are you sure?");
    if(this.confirmation){
      this.trainingService.updateTrainingMaterial(currentMaterial).subscribe((response: any) => {
        if(response){
          alert('Edit successful');
        }
        else{
          alert('Edit unsuccessful');
        }
      });
    }
  }

  deleteTrainingMaterial(currentMaterial: any){
    this.confirmation = confirm("Are you sure?");
    if(this.confirmation){
      this.trainingService.deleteTrainingMaterial(currentMaterial.id).subscribe((response: any) => {
        if(response){
          alert('Delete successful');
          this.router.navigateByUrl('/courses');
        }
        else{
          alert('Delete unsuccessful');
        }
      });
    }
  }

  createtTrainingMaterial(){
    this.material.id = 5;
    this.material.courseName = this.course.courseName;
    this.material.link = prompt("Please enter a training material's link", "");
    this.trainingService.addTrainingMaterial(this.material).subscribe((response: any) => {
      if(response){
        alert('Addition Sucessfully');
        this.router.navigateByUrl('/courses');
      }
      else{
        alert('Addition Unsuccessful')
      }
    });
  }
}