import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-spinner-ui-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-spinner.component.html',
  styleUrl: './ui-spinner.component.css',
})
export class UiSpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = 'primary';

  get sizeClass() {
    return this.size === 'sm' ? 'spinner-border-sm' : '';
  }

  get colorClass() {
    return `text-${this.color}`;
  }
}
