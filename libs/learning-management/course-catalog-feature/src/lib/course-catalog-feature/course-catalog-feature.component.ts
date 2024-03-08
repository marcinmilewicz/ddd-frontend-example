import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CourseCatalogApiService, CourseListItem } from '@ddd-hrm/course-catalog-data-access';
import { SelectEmployeeForLearningComponent } from '@ddd-hrm/course-shared';
import { BehaviorSubject, mergeMap } from 'rxjs';

@Component({
  selector: 'ddd-hrm-course-catalog-feature',
  standalone: true,
  imports: [CommonModule, SelectEmployeeForLearningComponent],
  templateUrl: './course-catalog-feature.component.html',
  styleUrl: './course-catalog-feature.component.css',
})
export class CourseCatalogFeatureComponent {
  private readonly courseCatalogApiService: CourseCatalogApiService = inject(CourseCatalogApiService);
  private readonly router: Router = inject(Router);

  private readonly refresh = new BehaviorSubject(void 0);

  courses: Signal<CourseListItem[] | undefined> = toSignal(
    this.refresh.pipe(mergeMap(() => this.courseCatalogApiService.fetchCourseCatalog()))
  );

  protected navigateToCourseList(courseId: number): void {
    this.router.navigate(['/learning-catalog', courseId]);
  }

  protected onSelectedEmployee(): void {
    this.refresh.next(void 0);
  }
}
