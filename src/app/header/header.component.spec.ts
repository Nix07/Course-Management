import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LoginService } from '../login.service';

class MockLoginService{
  changeValue(value: boolean){
    return of(false);
  }

  currentFlag = of(false);
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check image source', () => {
    expect(component.img_source).toEqual("./assets/images/accolite_logo.jpeg");
  });

  it('should log out', () => {
    spyOn(loginService, 'changeValue').and.callThrough();
    component.logOut();
    expect(loginService.changeValue).toHaveBeenCalled();
  });

});
