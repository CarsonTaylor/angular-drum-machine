import { TestBed } from '@angular/core/testing';

import { BeatMarkerService } from './beat-marker.service';

describe('BeatMarkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatMarkerService = TestBed.get(BeatMarkerService);
    expect(service).toBeTruthy();
  });
});
