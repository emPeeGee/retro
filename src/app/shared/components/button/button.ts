import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'outline' | 'hover' = 'primary';
  @Input() disabled: boolean = false;
}
