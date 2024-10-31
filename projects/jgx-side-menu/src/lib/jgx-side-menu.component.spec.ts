import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgxSideMenuComponent } from './jgx-side-menu.component';
import { provideRouter } from '@angular/router';

describe('JgxSideMenuComponent', () => {
  let component: JgxSideMenuComponent;
  let fixture: ComponentFixture<JgxSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JgxSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JgxSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when logout button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();
    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when logout button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();
    expect(component.onSignOut.emit).toHaveBeenCalled();
  });

});
