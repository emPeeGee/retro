import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AuthService } from './auth.service';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { User } from '../../core/models';

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const AuthStore = signalStore(
  withState(initialState),
  // withComputed(),
  withMethods(store => {
    const authService = inject(AuthService);

    return {
      login(payload: { email: string; password: string }): Observable<string> {
        patchState(store, state => ({ isLoading: true, error: null }));

        return authService.login(payload).pipe(
          delay(1300),
          tap(({ token }) => {
            console.log('Login successful:', token);
            // authService.saveToken(token);
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
);
