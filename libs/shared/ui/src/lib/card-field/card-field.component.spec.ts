import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardFieldComponent } from './card-field.component';

describe('CardFieldComponent', () => {
  let component: CardFieldComponent;
  let fixture: ComponentFixture<CardFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
