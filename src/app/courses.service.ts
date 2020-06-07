import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(){
    const URL = "http://localhost:8080/courses";
    return this.http.get(URL, {responseType: 'json'});
  }

  createCourse(course: any){
    const URL = "http://localhost:8080/courses"
    return this.http.post(URL, course, {responseType: 'json'});
  }

  getCourseByName(name: string){
    const URL = "http://localhost:8080/courses/" + name;
    return this.http.get(URL, {responseType: 'json'});
  }

  deleteCourseByName(name: string){
    const URL = "http://localhost:8080/courses/" + name;
    return this.http.delete(URL, {responseType: 'json'});
  }

  editCourseByName(course: any){
    const URL = "http://localhost:8080/courses/" + course.name;
    return this.http.put(URL, course, {responseType: 'json'});
  }
}
