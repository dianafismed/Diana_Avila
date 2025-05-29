import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { ProfileFotoComponent } from './components/profile-foto/profile-foto.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    ProfilePhotoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
