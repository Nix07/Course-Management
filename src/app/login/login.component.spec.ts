import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginService } from '../login.service';
import { LoginComponent } from './login.component';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

class MockLoginService {
  checkCredentials(email, password) {
    return of(true); 
  }

  currentFlag = of(false);

  changeValue(value: boolean){}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [{
        provide: LoginService,
        useClass: MockLoginService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    routeService = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check credentials', () => {
    spyOn(routeService, 'navigateByUrl').and.callThrough();
    component.submit();
    expect(routeService.navigateByUrl).toHaveBeenCalled();
  });
});
