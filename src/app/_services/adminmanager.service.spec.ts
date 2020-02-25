import { TestBed } from '@angular/core/testing';

import { AdminmanagerService } from './adminmanager.service';

describe('AdminmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminmanagerService = TestBed.get(AdminmanagerService);
    expect(service).toBeTruthy();
  });
});
