import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgxSideMenuComponent } from './jgx-side-menu.component';

describe('JgxSideMenuComponent', () => {
  let component: JgxSideMenuComponent;
  let fixture: ComponentFixture<JgxSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JgxSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JgxSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
