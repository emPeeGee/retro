import { Injectable, signal, computed, effect } from '@angular/core';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private _open = signal<boolean>(false);
  // private _open = signal<boolean>(this.getInitialSidebarState());
  private _openMobile = signal<boolean>(false);

  readonly isMobile = signal<boolean>(false); // replace with matchMedia logic if needed
  readonly open = this._open.asReadonly();
  readonly openMobile = this._openMobile.asReadonly();
  readonly state = computed(() => this.open() ? 'expanded' : 'collapsed');

  constructor() {
    // Keyboard shortcut effect
    effect(() => {
      console.log('state', this.state());
      const handler = (event: KeyboardEvent) => {
        if ((event.metaKey || event.ctrlKey) && event.key === SIDEBAR_KEYBOARD_SHORTCUT) {
          event.preventDefault();
          this.toggleSidebar();
        }
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);

    });
  }

  setOpen(value: boolean | ((prev: boolean) => boolean)) {
    const current = this._open();
    const next = typeof value === 'function' ? value(current) : value;
    this._open.set(next);
    this.setSidebarCookie(next);
  }

  setOpenMobile(value: boolean | ((prev: boolean) => boolean)) {
    const current = this._openMobile();
    const next = typeof value === 'function' ? value(current) : value;
    this._openMobile.set(next);
  }

  toggleSidebar() {
    if (this.isMobile()) {
      this.setOpenMobile((v) => !v);
    } else {
      this.setOpen((v) => !v);
    }
  }

  private setSidebarCookie(open: boolean) {
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }

  private getInitialSidebarState(): boolean {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(SIDEBAR_COOKIE_NAME + '='));
    return cookie ? cookie.split('=')[1] === 'true' : false;
  }
}
