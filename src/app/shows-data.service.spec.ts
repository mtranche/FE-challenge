import { TestBed } from '@angular/core/testing';

import { ShowsDataService } from './shows-data.service';

describe('ShowsDataService', () => {
  let service: ShowsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
