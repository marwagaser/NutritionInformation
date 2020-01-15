import { TestBed } from '@angular/core/testing';

import { FetchFoodInfoService } from './fetch-food-info.service';

describe('FetchFoodInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFoodInfoService = TestBed.get(FetchFoodInfoService);
    expect(service).toBeTruthy();
  });
});
