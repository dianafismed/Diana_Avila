import { Routes } from '@angular/router';
import { GradesComponent } from './components/grades/grades.component';
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
  { path: '', component:PrincipalComponent},
  { path: 'grades', component: GradesComponent }
];
