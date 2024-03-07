import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeProfileFeatureComponent } from './employee-profile-feature.component';

describe('EmployeeProfileFeatureComponent', () => {
  let component: EmployeeProfileFeatureComponent;
  let fixture: ComponentFixture<EmployeeProfileFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
