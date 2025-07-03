import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rtr-input',
  imports: [],
  templateUrl: './input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // NOTE: It seems that Angular will get confused when parsing the id attribute on a component.
  // https://stackoverflow.com/questions/61658281/angular-component-input-with-dynamic-id-and-name-not-working
  readonly inputId = input<string | null>(null);
  readonly type = input<string>('text');
  readonly placeholder = input<string | null>(null);
  readonly disabled = input<boolean>(false);
  readonly name = input<string | null>(null);
  readonly autocomplete = input<string | null>(null);
  readonly inputClass = input<string>('');

  readonly value = signal<string>('');
  readonly isDisabled = signal(this.disabled());

  private _onTouched: () => void = () => {};
  private _onChange: (val: any) => void = () => {};

  handleInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value.set(inputValue);
    this._onChange(inputValue);
  }

  writeValue(val: any): void {
    this.value.set(val ?? '');
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
