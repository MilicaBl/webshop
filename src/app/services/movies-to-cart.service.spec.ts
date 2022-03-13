import { TestBed } from '@angular/core/testing';

import { MoviesToCartService } from './movies-to-cart.service';

describe('MoviesToCartService', () => {
  let service: MoviesToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesToCartService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
