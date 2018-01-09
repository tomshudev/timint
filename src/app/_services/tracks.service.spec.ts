import { TestBed, inject } from '@angular/core/testing';

import { TracksService } from './tracks.service';

describe('TracksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TracksService]
    });
  });

  it('should be created', inject([TracksService], (service: TracksService) => {
    expect(service).toBeTruthy();
  }));
});
