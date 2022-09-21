import { TestBed } from '@angular/core/testing';

import { MarkerInformationService } from './marker-information.service';

describe('MarkerInformationService', () => {
  let service: MarkerInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
