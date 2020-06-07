import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ]
    });
    service = TestBed.inject(CoursesService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all courses', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.getAllCourses();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should get course by name', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.getCourseByName("Angular");
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should create course', () => {
    spyOn(httpClient, 'post').and.callThrough();
    service.createCourse({
      courseName: "Java Core",
      description: "This is course on Java Core.",
      id: 1,
      instructorName: "Sourav Raj",
      lastModified: "08:00:30",
      preRequisite: "C, C++"
    });
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should delete course by name', () => {
    spyOn(httpClient, 'delete').and.callThrough();
    service.deleteCourseByName("Angular");
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it('should edit course by name', () => {
    spyOn(httpClient, 'put').and.callThrough();
    service.editCourseByName({
      courseName: "Java Core",
      description: "This is course on Java Core.",
      id: 1,
      instructorName: "Sourav Raj",
      lastModified: "08:00:30",
      preRequisite: "C, C++"
    });
    expect(httpClient.put).toHaveBeenCalled();
  });

});
