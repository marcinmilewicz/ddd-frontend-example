import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '@ddd-hrm/employee-management/employee-model-shared';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeListApiService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  fetchEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  }
}
