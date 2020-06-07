import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private http: HttpClient) { }

  getParticipantsByCourseName(courseName: String){
    const URL = "http://localhost:8080/participants/" + courseName;
    return this.http.get(URL, {responseType: 'json'});
  }
}
