import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetailsFeatureComponent } from './course-details-feature.component';

describe('LearningAssignmentsFeatureComponent', () => {
  let component: CourseDetailsFeatureComponent;
  let fixture: ComponentFixture<CourseDetailsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
