import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { LoginService } from '../login.service';
import { CoursesService } from '../courses.service';
import { TrainingMaterialsService } from '../training-materials.service';
import { ParticipantsService } from '../participants.service';

class MockLoginService{
  currentFlag = of(false);
}

class MockCoursesService{
  getCourseByName(name: string){
    return of({
      courseName: "Java Core",
      description: "This is course on Java Core.",
      id: 1,
      instructorName: "Sourav Raj",
      lastModified: "08:00:30",
      preRequisite: "C, C++"
    });
  }

  deleteCourseByName(name: string){
    return of(true);
  }

  editCourseByName(course: any){
    return of(true);
  }
}

class MockTrainingMaterialsService{
  getTrainingMaterialsByCourseName(courseName: String){
    return of({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    });
  }

  getAllTrainingMaterials(){
    return of({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    });
  }

  updateTrainingMaterial(updatedMaterial: Object){
    return of(true);
  }

  deleteTrainingMaterial(id: any){
    return of(true);
  }

  addTrainingMaterial(newMaterial: Object){
    return of(true);
  }

  viewTrainingMaterialHistory(id: any){
    return of({
      courseName: "Java Core",
      date: "2020-06-05T02:30:30.461+00:00",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP",
      materialId: 1
    });
  }
}

class MockParticipantService{
  getParticipantsByCourseName(courseName: String){
    return of({
      courseName: "Java Core",
      email: "ankit.jha@gmail.com",
      id: 1,
      participantName: "Ankit Jha"
    });
  }
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let routeService: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [{
        provide: LoginService,
        useClass: MockLoginService
      }, {
        provide: ActivatedRoute,
        useValue: {snapshot: { paramMap: convertToParamMap({'name': 'Angular'})}}
      }, {
        provide: CoursesService,
        useClass: MockCoursesService
      }, {
        provide: TrainingMaterialsService,
        useClass: MockTrainingMaterialsService
      }, {
        provide: ParticipantsService,
        useClass: MockParticipantService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    routeService = TestBed.get(Router); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete course', () => {
    spyOn(routeService, 'navigateByUrl').and.callThrough();
    component.deleteCourse();
    expect(routeService.navigateByUrl).toHaveBeenCalled();
  });

  it('should edit course', () => {
    spyOn(routeService, 'navigateByUrl').and.callThrough();
    component.editCourse();
    expect(routeService.navigateByUrl).toHaveBeenCalled();
  });

  it('should edit training material', () => {
    component.editTrainingMaterial({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    })
    expect(component.response).toEqual(true);
  });

  it('should delete training material', () => {
    component.deleteTrainingMaterial({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    })
    expect(component.response).toEqual(true);
  });

  it('should create training materials', ()  => {
    spyOn(routeService, 'navigateByUrl').and.callThrough();
    component.createtTrainingMaterial();
    expect(routeService.navigateByUrl).toHaveBeenCalled();
  });

  it('should view history', ()  => {
    component.viewHistory({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    });
    expect(component.materialHistory).toBeDefined();
  });

});
