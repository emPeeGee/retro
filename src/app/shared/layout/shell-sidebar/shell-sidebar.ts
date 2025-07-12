import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '@app/core/auth';
import { UserStore } from '@app/core/store/user.store';
import { Button, Link, SidebarComponent, SidebarRailComponent } from '@app/shared/components';

@Component({
  selector: 'rtr-shell-sidebar',
  imports: [Link, SidebarComponent, Button, SidebarRailComponent],
  templateUrl: './shell-sidebar.html',
})
export class ShellSidebar {
  authStore = inject(AuthStore);
  userStore = inject(UserStore);
  router = inject(Router);

  signOut(): void {
    this.authStore.signOut().subscribe(() => {
      // TODO: Replace with a proper notification service
      alert('You have been signed out.');
      this.router.navigate(['sign-in']);
    });
  }
}
