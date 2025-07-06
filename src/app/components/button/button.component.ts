import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<string>();

  handleClick() {
    this.onClick.emit(this.label);
  }
}
