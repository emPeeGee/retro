import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
})
export class InputComponent {
  // NOTE: It seems that Angular will get confused when parsing the id attribute on a component.
  // https://stackoverflow.com/questions/61658281/angular-component-input-with-dynamic-id-and-name-not-working
  readonly inputId = input<string | null>(null);
  readonly type = input<string>('text');
  readonly placeholder = input<string | null>(null);
  readonly disabled = input<boolean>(false);
  readonly name = input<string | null>(null);
  readonly value = input<string | null>(null);
  readonly autocomplete = input<string | null>(null);
  readonly inputClass = input<string>('');
}
