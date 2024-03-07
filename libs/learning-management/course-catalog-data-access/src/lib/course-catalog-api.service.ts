import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CourseListItem } from './course-catalog.model';

@Injectable({ providedIn: 'root' })
export class CourseCatalogApiService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  fetchCourseCatalog(): Observable<CourseListItem[]> {
    return this.httpClient.get<CourseListItem[]>('http://localhost:3000/courses');
  }
}
