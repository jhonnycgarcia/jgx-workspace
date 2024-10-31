import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  RED= 'text-red-500',
  GREEN= 'text-green-500',
  BLUE= 'text-blue-500',
  YELLOW= 'text-yellow-500',
  PURPLE= 'text-purple-500',
}


@Component({
  selector: 'lib-jgx-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './jgx-side-menu.component.html',
  styles: ``
})
export class JgxSideMenuComponent {

  public isAuthenticated = input<boolean>(false);
  public onSignIn = output();
  public onSignOut = output();

  public titleColor = input<TitleColor>(TitleColor.PURPLE);

}
