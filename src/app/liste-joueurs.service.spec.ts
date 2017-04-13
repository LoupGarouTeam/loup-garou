import { TestBed, inject } from '@angular/core/testing';

import { ListeJoueursService } from './liste-joueurs.service';

describe('ListeJoueursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeJoueursService]
    });
  });

  it('should ...', inject([ListeJoueursService], (service: ListeJoueursService) => {
    expect(service).toBeTruthy();
  }));
});
