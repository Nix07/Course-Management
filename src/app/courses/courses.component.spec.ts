import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursesService } from '../courses.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

class MockCoursesService{
  createCourse(course: any){
    return of({
      courseName: "Angular",
      description: "This is course on Angular.",
      id: 1,
      instructorName: "Sourav Raj",
      lastModified: "08:20:30",
      preRequisite: "C, C++"
    });
  }

  getAllCourses(){
    return of([{
      courseName: "Java Core",
      description: "This is course on Java Core.",
      id: 1,
      instructorName: "Sourav Raj",
      lastModified: "08:00:30",
      preRequisite: "C, C++"
    }]);
  }
}

fdescribe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let courseService: CoursesService;
  let routeService: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [{
        provide: CoursesService,
        useClass: MockCoursesService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    courseService = TestBed.get(CoursesService);
    routeService = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create course', fakeAsync(() => {
    // spyOn(routeService, 'navigateByUrl').and.callThrough();
    component.createCourse();
    flush();
    expect(component.response).toBeDefined();
  }));
});
