import { TestBed } from '@angular/core/testing';

import { ExecutebashService } from './executebash.service';

describe('ExecutebashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExecutebashService = TestBed.get(ExecutebashService);
    expect(service).toBeTruthy();
  });
});
