import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  display = '';
  buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    'C',
  ];

  constructor(private calcService: CalculatorService) {}

  handleClick(button: string) {
    if (button === '=') {
      this.display = this.calcService.evaluate(this.display);
    } else if (button === 'C') {
      // clear
      this.display = '';
    } else {
      this.display += button;
    }
  }
}
