import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ShellSidebar } from '@app/shared/layout';
import { catchError, of } from 'rxjs';
import { UserStore } from './core/store';
import { AuthStore } from './core/auth';

@Component({
  selector: 'rtr-root',
  imports: [RouterOutlet, ShellSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'retro';

  userStore = inject(UserStore);
  authStore = inject(AuthStore);
  router = inject(Router);

  constructor() {
    effect(() => {
      this.userStore
        .getUser()
        .pipe(
          catchError(err => {
            console.log('hey', err);
            if (err.status === 401) {
              this.authStore.signOut().subscribe(() => {
                // TODO: Replace with a proper notification service
                alert('You have been signed out.');
                this.router.navigate(['sign-in']);
              });
            }

            return of(null);
          }),
        )
        .subscribe();
    });
  }
}
