import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingMaterialsService {

  constructor(private http: HttpClient) { }

  getAllTrainingMaterials(){
    const URL = "http://localhost:8080/training";
    return this.http.get(URL, {responseType: 'json'});
  }

  getTrainingMaterialsByCourseName(courseName: String){
    const URL = "http://localhost:8080/training/" + courseName;
    return this.http.get(URL, {responseType: 'json'});
  }

  updateTrainingMaterial(updatedMaterial: Object){
    const URL = "http://localhost:8080/training";
    return this.http.put(URL, updatedMaterial, {responseType: 'json'});
  }

  deleteTrainingMaterial(id: any){
    const URL = "http://localhost:8080/training/" + id;
    return this.http.delete(URL, {responseType: 'json'});
  }

  addTrainingMaterial(newMaterial: Object){
    const URL = "http://localhost:8080/training/";
    return this.http.post(URL, newMaterial, {responseType: 'json'});
  }

  viewTrainingMaterialHistory(id: any){
    const URL = "http://localhost:8080/versions/" + id;
    return this.http.get(URL, {responseType: 'json'});
  }
}
