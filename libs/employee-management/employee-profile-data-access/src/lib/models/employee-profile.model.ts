import { Employee } from '@ddd-hrm/employee-management/employee-model-shared';

export type EmployeeDetails = {
  email: string;
  phone: string;
  address: string;
  department: string;
  salary: number;
  startDate: string;
  endDate: string;
} & Employee;

export type CourseAssignmentForEmployee = {
  id: number;
  name: string;
};
