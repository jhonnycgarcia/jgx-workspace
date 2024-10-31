import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JgxSideMenuComponent } from 'jgx-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JgxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jgx-testbet-app';
}
