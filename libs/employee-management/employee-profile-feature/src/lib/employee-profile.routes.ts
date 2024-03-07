import { Routes } from '@angular/router';
import { EmployeeProfileFeatureComponent } from './employee-profile-feature/employee-profile-feature.component';

export const routes: Routes = [
  {
    path: ':id',
    component: EmployeeProfileFeatureComponent,
  },
];
