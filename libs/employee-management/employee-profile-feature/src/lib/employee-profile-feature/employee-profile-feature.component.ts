import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeProfileApiService } from '@ddd-hrm/employee-management/employee-profile-data-access';
import { BadgeComponent, CardComponent, CardFieldComponent } from '@ddd-hrm/shared/ui';

import { mergeMap } from 'rxjs';

@Component({
  selector: 'ddd-hrm-employee-profile-feature',
  standalone: true,
  imports: [CommonModule, BadgeComponent, CardComponent, CardFieldComponent],
  templateUrl: './employee-profile-feature.component.html',
  styleUrl: './employee-profile-feature.component.css',
})
export class EmployeeProfileFeatureComponent {
  private readonly employeeProfileApiService: EmployeeProfileApiService = inject(EmployeeProfileApiService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  protected readonly details = toSignal(
    this.activatedRoute.params.pipe(mergeMap(({ id }) => this.employeeProfileApiService.fetchEmployeeDetails(id)))
  );

  protected readonly courses = toSignal(
    this.activatedRoute.params.pipe(mergeMap(({ id }) => this.employeeProfileApiService.fetchCoursesAssignments(id)))
  );

  protected onCourseClick(courseId: number) {
    this.router.navigate([`/learning-catalog/${courseId}`]);
  }
}
