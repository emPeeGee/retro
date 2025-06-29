import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rtr-link',
  imports: [RouterLink],
  templateUrl: './link.html',
  styleUrl: './link.css',
})
export class Link {
  readonly to = input.required<string>();
  readonly title = input.required<string>();
  readonly subTitle = input<string>('');
}
