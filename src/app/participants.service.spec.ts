import { TestBed } from '@angular/core/testing';

import { ParticipantsService } from './participants.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ParticipantsService', () => {
  let service: ParticipantsService;
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
    service = TestBed.inject(ParticipantsService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.getParticipantsByCourseName("Angular");
    expect(httpClient.get).toHaveBeenCalled();
  });
});
