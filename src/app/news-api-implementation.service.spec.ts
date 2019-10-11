import { TestBed } from '@angular/core/testing';

import { NewsApiImplementationService } from './news-api-implementation.service';

describe('NewsApiImplementationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsApiImplementationService = TestBed.get(NewsApiImplementationService);
    expect(service).toBeTruthy();
  });
});
