import { TestBed } from '@angular/core/testing';

import { AcademifyApiService } from './academify-api.service';

describe('AcademifyApiService', () => {
  let service: AcademifyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademifyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
