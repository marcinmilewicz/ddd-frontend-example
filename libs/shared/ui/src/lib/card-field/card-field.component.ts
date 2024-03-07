import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ddd-hrm-card-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-field.component.html',
  styleUrl: './card-field.component.scss',
})
export class CardFieldComponent<T> {
  fieldValue = input<T>();
  label = input.required<string>();
}
