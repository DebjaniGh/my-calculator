import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-calculator';
}
