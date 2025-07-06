import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { AuthService } from './auth.service';
import { catchError, delay, map, Observable, tap } from 'rxjs';
import { User } from '../../core/models';

export type AuthState = {
  // TODO: Not used yet
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};
export const AuthStore = signalStore(
  withState(initialState),
  withComputed(({ token }) => ({
    isAuthenticated: computed(() => Boolean(token())),
  })),
  withMethods(store => {
    const authService = inject(AuthService);

    return {
      login(payload: { email: string; password: string }): Observable<string> {
        patchState(store, state => ({ isLoading: true, error: null }));

        return authService.login(payload).pipe(
          delay(1000),
          tap(({ token }) => {
            authService.saveToken(token);
            patchState(store, { token, isLoading: false });
          }),
          map(({ token }) => token),
          catchError(err => {
            console.error('Login error:', err);
            patchState(store, { error: err.error.title, isLoading: false });
            return '';
            // return throwError(() => err);
          }),
        );
      },
    };
  }),
  withHooks({
    onInit: store => {
      const authService = inject(AuthService);
      const token = authService.getToken();
      if (token) {
        patchState(store, { token });
      }
    },
  }),
);
