import { Component } from '@angular/core';

import { RdxLabelDirective } from '@radix-ng/primitives/label';
import { RdxSwitchInputDirective, RdxSwitchRootDirective, RdxSwitchThumbDirective } from '@radix-ng/primitives/switch';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.html',
  imports: [RdxLabelDirective, RdxSwitchRootDirective, RdxSwitchInputDirective, RdxSwitchThumbDirective],
})
export class Switch {}
