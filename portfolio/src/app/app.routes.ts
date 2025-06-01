import { Routes } from '@angular/router';
import { GradesComponent } from './pages/grades/grades.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'projects', component: ProjectsComponent },

];
