import { TestBed } from '@angular/core/testing';

import { TrainingMaterialsService } from './training-materials.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

describe('TrainingMaterialsService', () => {
  let service: TrainingMaterialsService;
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
    service = TestBed.inject(TrainingMaterialsService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should get all training materials', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.getAllTrainingMaterials();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should get training material by course name', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.getTrainingMaterialsByCourseName("Angular");
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should update training material', () => {
    spyOn(httpClient, 'put').and.callThrough();
    service.updateTrainingMaterial({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    });
    expect(httpClient.put).toHaveBeenCalled();
  });

  it('should delete training material', () => {
    spyOn(httpClient, 'delete').and.callThrough();
    service.deleteTrainingMaterial(2);
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it('should add training material', () => {
    spyOn(httpClient, 'post').and.callThrough();
    service.addTrainingMaterial({
      courseName: "Java Core",
      id: 1,
      link: "https://drive.google.com/drive/u/1/folders/1AjZ3nq13v2gc3LnqsccuO8ffcSypyBwP"
    });
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should return training material versions', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.viewTrainingMaterialHistory(2);
    expect(httpClient.get).toHaveBeenCalled();
  });
});
