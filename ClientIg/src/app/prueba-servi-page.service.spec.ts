import { TestBed } from '@angular/core/testing';

import { PruebaServiPageService } from './prueba-servi-page.service';

describe('PruebaServiPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PruebaServiPageService = TestBed.get(PruebaServiPageService);
    expect(service).toBeTruthy();
  });
});
