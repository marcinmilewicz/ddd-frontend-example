import { Routes } from '@angular/router';
import { CourseCatalogFeatureComponent } from './course-catalog-feature/course-catalog-feature.component';

export const courseRoutes: Routes = [
  { path: '', component: CourseCatalogFeatureComponent },
  {
    path: ':id',
    loadComponent: () =>
      import('@ddd-hrm/course-details-feature').then(
        ({ CourseDetailsFeatureComponent }) => CourseDetailsFeatureComponent
      ),
  },
];
