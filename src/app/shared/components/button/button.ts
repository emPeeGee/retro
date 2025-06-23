import { Component, Input } from '@angular/core';

type ButtonVariant = 'default' | 'noShadow' | 'neutral' | 'reverse';
type ButtonSize = 'md' | 'sm' | 'lg' | 'icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
})
export class Button {
  @Input() variant: ButtonVariant = 'default';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() additionalClasses = '';

  get buttonClasses(): string {
    const base = `inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2
    [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50`;

    const variants: Record<ButtonVariant, string> = {
      default: 'text-main-foreground bg-main border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
      noShadow: 'text-main-foreground bg-main border-2 border-border',
      neutral: 'bg-secondary-background text-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
      reverse: 'text-main-foreground bg-main border-2 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'h-9 px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8',
      icon: 'size-10',
    };

   return [
      base,
      variants[this.variant],
      sizes[this.size],
      this.additionalClasses
    ].join(' ');
  }
}
