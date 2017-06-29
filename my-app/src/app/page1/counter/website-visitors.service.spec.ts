import { TestBed, inject } from '@angular/core/testing';

import { WebsiteVisitorsService } from './website-visitors.service';

describe('WebsiteVisitorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsiteVisitorsService]
    });
  });

  it('should be created', inject([WebsiteVisitorsService], (service: WebsiteVisitorsService) => {
    expect(service).toBeTruthy();
  }));
});
