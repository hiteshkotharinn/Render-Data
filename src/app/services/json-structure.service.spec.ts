import { TestBed } from '@angular/core/testing';

import { JsonStructureService } from './json-structure.service';

describe('JsonStructureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonStructureService = TestBed.get(JsonStructureService);
    expect(service).toBeTruthy();
  });
});
