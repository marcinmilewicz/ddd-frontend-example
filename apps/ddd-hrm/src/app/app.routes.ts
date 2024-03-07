import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'employee-list',
    loadComponent: () =>
      import('@ddd-hrm/employee-management/employee-list-feature').then(
        ({ EmploymentListFeatureComponent }) => EmploymentListFeatureComponent
      ),
  },
  {
    path: 'employee-profile',
    loadChildren: () => import('@ddd-hrm/employee-management/employee-profile-feature').then(({ routes }) => routes),
  },
  {
    path: 'learning-catalog',
    loadChildren: () => import('@ddd-hrm/course-catalog-feature').then(({ courseRoutes }) => courseRoutes),
  },
];
