import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseAssignmentForEmployee, EmployeeDetails } from '../models/employee-profile.model';

@Injectable({ providedIn: 'root' })
export class EmployeeProfileApiService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  fetchEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
    return this.httpClient.get<EmployeeDetails>(`http://localhost:3000/employees/${employeeId}`);
  }

  fetchCoursesAssignments(employeeId: number): Observable<CourseAssignmentForEmployee[]> {
    return this.httpClient.get<CourseAssignmentForEmployee[]>(`http://localhost:3000/employees/${employeeId}/courses`);
  }
}
