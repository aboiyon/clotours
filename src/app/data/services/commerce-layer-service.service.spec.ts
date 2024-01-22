import { TestBed } from '@angular/core/testing';

import { CommerceLayerServiceService } from './commerce-layer-service.service';

describe('CommerceLayerServiceService', () => {
  let service: CommerceLayerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommerceLayerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
