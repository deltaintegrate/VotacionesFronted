import { TestBed } from '@angular/core/testing';

import { VotanteService } from './votante.service';

describe('VotanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VotanteService = TestBed.get(VotanteService);
    expect(service).toBeTruthy();
  });
});
