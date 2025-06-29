import { Component, input } from '@angular/core';
import { RdxLabelDirective } from '@radix-ng/primitives/label';

@Component({
  selector: 'rtr-label',
  imports: [RdxLabelDirective],
  templateUrl: './label.html',
})
export class Label {
  readonly class = input<string>('');
  readonly htmlFor = input<string>('');
}
