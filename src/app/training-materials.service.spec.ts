import { TestBed } from '@angular/core/testing';

import { TrainingMaterialsService } from './training-materials.service';

describe('TrainingMaterialsService', () => {
  let service: TrainingMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
