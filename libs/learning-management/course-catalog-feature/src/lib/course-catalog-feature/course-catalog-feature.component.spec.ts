import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCatalogFeatureComponent } from './course-catalog-feature.component';

describe('LearningCatalogFeatureComponent', () => {
  let component: CourseCatalogFeatureComponent;
  let fixture: ComponentFixture<CourseCatalogFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCatalogFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCatalogFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
