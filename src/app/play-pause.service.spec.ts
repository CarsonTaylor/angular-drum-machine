import { TestBed } from '@angular/core/testing';

import { PlayPauseService } from './play-pause.service';

describe('PlayPauseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayPauseService = TestBed.get(PlayPauseService);
    expect(service).toBeTruthy();
  });
});
