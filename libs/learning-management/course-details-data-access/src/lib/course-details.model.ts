import { CourseBase } from '@ddd-hrm/course-model-shared';

export type CourseDetails = {
  seats: number;
  assignees: number[];
} & CourseBase;

export type EmployeeAssignmentForCourse = {
  id: number;
  name: string;
  position: string;
};
