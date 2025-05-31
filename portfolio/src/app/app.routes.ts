import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { GradesComponent } from './components/grades/grades.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'grades', component: GradesComponent },
];
