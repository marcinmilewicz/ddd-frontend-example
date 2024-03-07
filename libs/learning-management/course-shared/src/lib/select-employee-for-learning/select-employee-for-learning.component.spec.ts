import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectEmployeeForLearningComponent } from './select-employee-for-learning.component';

describe('LearningSharedComponent', () => {
  let component: SelectEmployeeForLearningComponent;
  let fixture: ComponentFixture<SelectEmployeeForLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectEmployeeForLearningComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEmployeeForLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
