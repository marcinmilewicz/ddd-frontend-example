import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, inject, input, Output, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { EmployeeAssignmentForCourse, CourseDetailsApiService } from '@ddd-hrm/course-details-data-access';

@Component({
  selector: 'ddd-hrm-select-employee-for-learning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-employee-for-learning.component.html',
  styleUrl: './select-employee-for-learning.component.css',
})
export class SelectEmployeeForLearningComponent {
  private readonly learningAssignmentApiService: CourseDetailsApiService = inject(CourseDetailsApiService);

  courseId = input.required<number>();
  @Output() readonly selected: EventEmitter<EmployeeAssignmentForCourse> =
    new EventEmitter<EmployeeAssignmentForCourse>();

  employeesForAssignement = toSignal(this.learningAssignmentApiService.fetchEmployeeAssignments());
  selectedEmployee: WritableSignal<EmployeeAssignmentForCourse | null> = signal<EmployeeAssignmentForCourse | null>(
    null
  );

  constructor() {
    effect(() => {
      const selectedEmployee = this.selectedEmployee();

      if (selectedEmployee) {
        this.learningAssignmentApiService
          .assignEmployeeToCourse(this.courseId(), selectedEmployee.id)
          .subscribe(() => this.selected.emit(selectedEmployee));
      }
    });
  }
}
