import { TestBed } from '@angular/core/testing';

import { LiveServiceService } from './live-service.service';

describe('LiveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveServiceService = TestBed.get(LiveServiceService);
    expect(service).toBeTruthy();
  });
});
