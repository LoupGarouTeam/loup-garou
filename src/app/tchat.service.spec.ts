import { TestBed, inject } from '@angular/core/testing';

import { TchatService } from './tchat.service';

describe('TchatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TchatService]
    });
  });

  it('should ...', inject([TchatService], (service: TchatService) => {
    expect(service).toBeTruthy();
  }));
});
