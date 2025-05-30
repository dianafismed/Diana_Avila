import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { PrincipalComponent } from './components/principal/principal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
