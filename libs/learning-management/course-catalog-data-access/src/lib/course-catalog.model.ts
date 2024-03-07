import { CourseBase } from '@ddd-hrm/course-model-shared';

export type CourseListItem = {
  seatsLeft: number;
} & CourseBase;
