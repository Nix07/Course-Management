import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginService } from '../login.service';
import { LoginComponent } from './login.component';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

class MockLoginService {
  checkCredentials(email, password) {
    return of(true);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let http: HttpClient

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [{
        provider: LoginService,
        useClass: MockLoginService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
