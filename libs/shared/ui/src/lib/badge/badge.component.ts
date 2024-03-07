import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'ddd-hrm-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent<T extends { id: number; name: string }> {
  item = input.required<T>();
  withoutRemoveButton = input<boolean>();
  @Output() readonly removed: EventEmitter<number> = new EventEmitter<number>();
}
