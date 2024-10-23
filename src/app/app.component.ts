import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiSpinnerComponent } from './ui-spinner/ui-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UiSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cbc';

  parent() {
    console.log('hello parent');
  }

  child(event: Event) {
    event.stopPropagation();
    console.log('hello child');
  }
}
