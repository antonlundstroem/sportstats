import { TestBed } from '@angular/core/testing';

import { FilterbuttonserviceService } from './filterbuttonservice.service';

describe('FilterbuttonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterbuttonserviceService = TestBed.get(FilterbuttonserviceService);
    expect(service).toBeTruthy();
  });
});
