/* eslint-disable max-len */
// eslint-disable-next-line max-classes-per-file
import { Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'rtr-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class Card {
  readonly extraClass = input<string>('');

  readonly computedClass = computed(
    () =>
      `rounded-base flex flex-col shadow-shadow border-2 gap-6 py-6 border-border bg-background text-foreground font-base ${this.extraClass()}`,
  );
}

@Component({
  selector: 'rtr-card-header',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-header" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardHeader {
  readonly extraClass = input<string>('');

  readonly computedClass = computed(
    () =>
      `@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 ${this.extraClass()}`,
  );
}

@Component({
  selector: 'rtr-card-title',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-title" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardTitle {
  readonly extraClass = input<string>('');
  readonly computedClass = computed(() => `font-heading leading-none ${this.extraClass()}`);
}

@Component({
  selector: 'rtr-card-description',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-description" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardDescription {
  readonly extraClass = input<string>('');
  readonly computedClass = computed(() => `text-sm font-base ${this.extraClass()}`);
}

@Component({
  selector: 'rtr-card-action',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-action" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardAction {
  readonly extraClass = input<string>('');
  readonly computedClass = computed(
    () => `col-start-2 row-span-2 row-start-1 self-start justify-self-end ${this.extraClass()}`,
  );
}

@Component({
  selector: 'rtr-card-content',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-content" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardContent {
  readonly extraClass = input<string>('');
  readonly computedClass = computed(() => `px-6 ${this.extraClass()}`);
}

@Component({
  selector: 'rtr-card-footer',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-footer" [ngClass]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardFooter {
  readonly extraClass = input<string>('');
  readonly computedClass = computed(() => `flex items-center px-6 [.border-t]:pt-6 ${this.extraClass()}`);
}
