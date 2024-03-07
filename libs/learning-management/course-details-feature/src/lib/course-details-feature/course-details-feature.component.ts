import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsApiService } from '@ddd-hrm/course-details-data-access';
import { SelectEmployeeForLearningComponent } from '@ddd-hrm/course-shared';
import { BadgeComponent, CardComponent, CardFieldComponent } from '@ddd-hrm/shared/ui';

import { BehaviorSubject, mergeMap, withLatestFrom } from 'rxjs';

@Component({
  selector: 'ddd-hrm-course-details-feature',
  standalone: true,
  imports: [CommonModule, BadgeComponent, SelectEmployeeForLearningComponent, CardComponent, CardFieldComponent],
  templateUrl: './course-details-feature.component.html',
  styleUrl: './course-details-feature.component.css',
})
export class CourseDetailsFeatureComponent {
  private readonly courseDetailsApiService: CourseDetailsApiService = inject(CourseDetailsApiService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly refresh = new BehaviorSubject(void 0);

  protected readonly details = toSignal(
    this.refresh.pipe(
      withLatestFrom(this.activatedRoute.params, (_, id) => id),
      mergeMap(({ id }) => this.courseDetailsApiService.fetchCourseDetails(id))
    )
  );
  protected readonly assignableEmployees = toSignal(this.courseDetailsApiService.fetchEmployeeAssignments());
  protected participants = computed(() =>
    this.details()?.assignees.map((attendee) => this.assignableEmployees()?.find((employee) => employee.id === attendee))
  );

  protected onSelectedEmployee(): void {
    this.refresh.next(void 0);
  }

  protected onRemoved(courseId: number, employeeId: number): void {
    this.courseDetailsApiService.removeEmployeeFromCourse(courseId, employeeId).subscribe(() => this.refresh.next(void 0));
  }
}
