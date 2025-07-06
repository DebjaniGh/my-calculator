import { Injectable } from '@angular/core';
import { Parser } from 'expr-eval';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private parser = new Parser();

  evaluate(expression: string): string {
    try {
      return this.parser.evaluate(expression).toString();
      //return eval(expression).toString(); // Replace with a safer parser in production
    } catch {
      return 'Error';
    }
  }

  constructor() {}
}
