import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmploymentListFeatureComponent } from './employment-list-feature.component';

describe('EmploymentListFeatureComponent', () => {
  let component: EmploymentListFeatureComponent;
  let fixture: ComponentFixture<EmploymentListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentListFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
