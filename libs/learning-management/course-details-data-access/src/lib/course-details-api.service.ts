import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDetails, EmployeeAssignmentForCourse } from './course-details.model';

@Injectable({ providedIn: 'root' })
export class CourseDetailsApiService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  fetchCourseDetails(courseId: number): Observable<CourseDetails> {
    return this.httpClient.get<CourseDetails>(`http://localhost:3000/courses/${courseId}`);
  }

  fetchEmployeeAssignments(): Observable<EmployeeAssignmentForCourse[]> {
    return this.httpClient.get<EmployeeAssignmentForCourse[]>('http://localhost:3000/assignable-employees');
  }

  assignEmployeeToCourse(courseId: number, employeeId: number): Observable<{ assigneeId: number }> {
    return this.httpClient.patch<{ assigneeId: number }>(`http://localhost:3000/courses/${courseId}/assignees`, {
      employeeId,
    });
  }

  removeEmployeeFromCourse(courseId: number, employeeId: number): Observable<{ assigneeId: number }> {
    return this.httpClient.delete<{ assigneeId: number }>(
      `http://localhost:3000/courses/${courseId}/assignees/${employeeId}`
    );
  }
}
