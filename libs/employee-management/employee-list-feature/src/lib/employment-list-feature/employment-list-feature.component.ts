import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { EmployeeListApiService } from '@ddd-hrm/employee-management/employee-list-data-access';

@Component({
  selector: 'ddd-hrm-employment-list-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employment-list-feature.component.html',
  styleUrl: './employment-list-feature.component.css',
})
export class EmploymentListFeatureComponent {
  private readonly employeeListApiService: EmployeeListApiService = inject(EmployeeListApiService);
  private readonly router: Router = inject(Router);

  employees = toSignal(this.employeeListApiService.fetchEmployees());

  protected navigateToEmployeeProfile(employeeId: number): void {
    this.router.navigate(['/employee-profile', employeeId]);
  }
}
