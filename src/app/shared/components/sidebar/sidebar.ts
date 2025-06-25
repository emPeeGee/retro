import { Component, Input, computed, inject, input, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SidebarService } from '../../../core/services/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, CommonModule],
  template: `
    <!-- Collapsible: none -->
    <ng-container *ngIf="collapsible() === 'none'; else collapsibleBlock">
      <div
        data-slot="sidebar"
        class="bg-secondary-background text-foreground flex h-full w-[--sidebar-width] flex-col"
        [ngClass]="className()"
      >
        <ng-content></ng-content>
      </div>
    </ng-container>

    <!-- Collapsible on mobile/desktop -->
    <ng-template #collapsibleBlock>
      <ng-container *ngIf="sidebar.isMobile(); else desktopBlock">
        <!-- Mobile sheet placeholder -->
        <div
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          class="bg-secondary-background text-foreground w-[--sidebar-width] p-0"
          [ngStyle]="{ '--sidebar-width': sidebarWidthMobile }"
        >
          <div class="flex h-full w-full flex-col">
            <ng-content></ng-content>
          </div>
        </div>
      </ng-container>

      <ng-template #desktopBlock>
        <div
          class="group peer hidden md:block"
          [attr.data-state]="sidebar.state()"
          [attr.data-collapsible]="sidebar.state() === 'collapsed' ? collapsible() : ''"
          [attr.data-variant]="variant()"
          [attr.data-side]="side()"
          data-slot="sidebar"
        >
          <!-- Sidebar gap -->
          <div
            data-slot="sidebar-gap"
            [ngClass]="gapClass()"
          ></div>

          <!-- Sidebar container -->
          <div
            data-slot="sidebar-container"
            [ngClass]="containerClass()"
          >
            <div
              data-sidebar="sidebar"
              data-slot="sidebar-inner"
              class="bg-secondary-background flex h-full w-full flex-col"
            >
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </ng-template>
    </ng-template>
  `,
})
export class SidebarComponent {
  sidebar = inject(SidebarService);

  readonly side = input<'left' | 'right'>('left');
  readonly variant = input<'sidebar' | 'floating' | 'inset'>('sidebar');
  readonly collapsible = input<'offcanvas' | 'icon' | 'none'>('offcanvas');
  readonly className = input<string>('');

  sidebarWidthMobile = '18rem';

  gapClass = computed(() => {
    const base = 'relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear';
    const side = this.side() === 'right' ? 'group-data-[side=right]:rotate-180' : '';
    const iconWidth =
      this.variant() === 'floating' || this.variant() === 'inset'
        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]';
    return `${base} group-data-[collapsible=offcanvas]:w-0 ${side} ${iconWidth}`;
  });

  containerClass = computed(() => {
    const base =
      'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex';
    const side = this.side() === 'left'
      ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
      : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]';
    const padding =
      this.variant() === 'floating' || this.variant() === 'inset'
        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r-2 border-r-border group-data-[side=right]:border-l-2 border-l-border';
    return `${base} ${side} ${padding} ${this.className()}`;
  });
}