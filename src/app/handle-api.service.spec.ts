import { TestBed } from '@angular/core/testing';

import { HandleApiService } from './handle-api.service';

describe('HandleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleApiService = TestBed.get(HandleApiService);
    expect(service).toBeTruthy();
  });
});
