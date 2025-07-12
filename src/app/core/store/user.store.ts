import { effect, inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../models';
import { UserService } from '../services/user-service';

export type UserState = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const UserStore = signalStore(
  withState(initialState),
  withMethods(store => {
    const userService = inject(UserService);

    return {
      getUser(): Observable<User | null> {
        patchState(store, () => ({ isLoading: true, error: null }));

        return userService.getMe().pipe(
          tap(user => {
            patchState(store, { user, isLoading: false });
          }),
          catchError(err => {
            patchState(store, { error: err?.error?.title ?? 'Unexpected error', isLoading: false });
            return of(null);
          }),
        );
      },
    };
  }),
  withHooks({
    onInit: store => {
      // TODO: not sure if this is the best place to call getUser
      effect(() => {
        store.getUser().subscribe();
      });
    },
  }),
);
