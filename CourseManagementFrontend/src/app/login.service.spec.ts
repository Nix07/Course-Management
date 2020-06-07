import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

describe('LoginService', () => {
  let service: LoginService;
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
    service = TestBed.inject(LoginService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send POST request', () => {
    spyOn(httpClient, 'post').and.callThrough();
    service.checkCredentials("nikhil@gmail.com", "Nikhil@123");
    expect(httpClient.post).toHaveBeenCalled();
  });

});
