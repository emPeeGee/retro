import { Component, computed, Input, input } from '@angular/core';
import { RdxLabelDirective } from '@radix-ng/primitives/label';


@Component({
  selector: 'app-label',
  imports: [RdxLabelDirective],
  templateUrl: './label.html',
})
export class Label {
  readonly class = input<string>('');
  readonly htmlFor = input<string>('');
}
