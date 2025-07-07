import { Component, inject } from '@angular/core';
import { AuthStore } from '@app/core/auth';
import { Button, Link, SidebarComponent, SidebarRailComponent } from '@app/shared/components';

@Component({
  selector: 'rtr-shell-sidebar',
  imports: [Link, SidebarComponent, Button, SidebarRailComponent],
  templateUrl: './shell-sidebar.html',
})
export class ShellSidebar {
  authStore = inject(AuthStore);

  signOut(): void {}
}
