import { TestBed } from '@angular/core/testing';

import { JgxSideMenuService } from './jgx-side-menu.service';

describe('JgxSideMenuService', () => {
  let service: JgxSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JgxSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
