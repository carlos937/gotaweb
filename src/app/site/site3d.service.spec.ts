import { TestBed } from '@angular/core/testing';

import { Site3dService } from './site3d.service';

describe('Site3dService', () => {
  let service: Site3dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Site3dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
