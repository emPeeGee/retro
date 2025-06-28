/* eslint-disable max-classes-per-file */
import { Component, computed, inject, input, output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SidebarService } from '../../../core/services/sidebar';
import { Button } from '../button/button';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, CommonModule],
  template: `
    @if (collapsible() === 'none') {
      <div
        class="bg-secondary-background text-foreground flex h-full w-(--sidebar-width) flex-col"
        data-slot="sidebar"
        [ngClass]="extraClass()">
        <ng-content />
      </div>
    }

    @if (sidebar.isMobile()) {
      <!-- TODO: Mobile sheet placeholder -->
      <div
        class="bg-secondary-background text-foreground w-(--sidebar-width) p-0"
        data-mobile="true"
        data-sidebar="sidebar"
        data-slot="sidebar"
        [ngStyle]="{ '--sidebar-width': sidebarWidthMobile }">
        <div class="flex h-full w-full flex-col">
          <ng-content />
        </div>
      </div>
    } @else {
      <div
        class="group peer hidden md:block"
        data-slot="sidebar"
        [attr.data-collapsible]="sidebar.state() === 'collapsed' ? collapsible() : ''"
        [attr.data-side]="side()"
        [attr.data-state]="sidebar.state()"
        [attr.data-variant]="variant()">
        <div data-slot="sidebar-gap" [ngClass]="gapClass()"></div>

        <div class="w-(--sidebar-width)" data-slot="sidebar-container" [ngClass]="containerClass()">
          <div
            class="bg-secondary-background flex h-full w-full flex-col bg-sidebar 
            group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border 
            group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
            data-sidebar="sidebar"
            data-slot="sidebar-inner">
            <h1>test</h1>
            <ng-content />
          </div>
        </div>
      </div>
    }
  `,
})
export class SidebarComponent {
  sidebar = inject(SidebarService);
  sidebarWidthMobile = '18rem';

  readonly side = input<'left' | 'right'>('left');
  readonly variant = input<'sidebar' | 'floating'>('floating');
  readonly collapsible = input<'offcanvas' | 'icon' | 'none'>('icon');
  readonly extraClass = input<string>('');

  readonly gapClass = computed(() => {
    const base = 'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear';
    const side = this.side() === 'right' ? 'group-data-[side=right]:rotate-180' : '';
    const iconWidth =
      this.variant() === 'floating'
        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]';
    return `${base} group-data-[collapsible=offcanvas]:w-0 ${side} ${iconWidth}`;
  });

  readonly containerClass = computed(() => {
    const base = `fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width]
       duration-200 ease-linear md:flex`;
    const side =
      this.side() === 'left'
        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]';
    const padding =
      this.variant() === 'floating'
        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
        : `group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r-2 
          border-r-border group-data-[side=right]:border-l-2 border-l-border`;
    return `${base} ${side} ${padding} ${this.extraClass()}`;
  });
}

@Component({
  selector: 'app-sidebar-rail',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      aria-label="Toggle Sidebar"
      data-sidebar="rail"
      data-slot="sidebar-rail"
      tabindex="-1"
      title="Toggle Sidebar"
      type="button"
      [ngClass]="computedClass()"
      (click)="sidebar.toggleSidebar()"></button>
  `,
})
export class SidebarRailComponent {
  sidebar = inject(SidebarService);
  readonly extraClass = input<string>('');

  readonly computedClass = computed(
    () =>
      `absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear 
    group-data-[side=left]:-right-4 group-data-[side=right]:left-0 
    after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex
    in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize
    [[data-side=left][data-state=collapsed]_&]:cursor-e-resize 
    [[data-side=right][data-state=collapsed]_&]:cursor-w-resize
    hover:group-data-[collapsible=offcanvas]:bg-sidebar 
    group-data-[collapsible=offcanvas]:translate-x-0 
    group-data-[collapsible=offcanvas]:after:left-full
    [[data-side=left][data-collapsible=offcanvas]_&]:-right-2 
    [[data-side=right][data-collapsible=offcanvas]_&]:-left-2
    ${this.extraClass()}
    `,
  );
}

@Component({
  selector: 'app-sidebar-trigger',
  standalone: true,
  imports: [NgClass, Button],
  template: `
    <app-button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      [ngClass]="computedClass()"
      [size]="'icon'"
      [variant]="'noShadow'"
      (click)="handleClick($event)">
      <!-- <app-panel-left-icon /> -->
      <span class="sr-only">Toggle Sidebar</span>
    </app-button>
  `,
})
export class SidebarTriggerComponent {
  private readonly sidebar = inject(SidebarService);

  readonly extraClass = input<string>('');
  readonly sidebarTrigger = output<MouseEvent>();
  readonly computedClass = computed(() => `size-7 ${this.extraClass()}`);

  handleClick(event: MouseEvent): void {
    this.sidebarTrigger.emit(event);
    this.sidebar.toggleSidebar();
  }
}
