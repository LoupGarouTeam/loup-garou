import { TestBed, inject } from '@angular/core/testing';

import { PseudoService } from './pseudo.service';

describe('PseudoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PseudoService]
    });
  });

  it('should ...', inject([PseudoService], (service: PseudoService) => {
    expect(service).toBeTruthy();
  }));
});
