import { Routes } from '@angular/router';
import { NotFound } from '@app/shared/components';
import { SignIn } from '@app/features/auth';
import { authGuard } from '@app/core/auth';

export const routes: Routes = [
  // { path: '', redirectTo: 'chat', pathMatch: 'full' },
  // TODO: use a route for whole authentication flow
  { path: 'sign-in', component: SignIn, pathMatch: 'full' },
  {
    path: 'chat',
    // do not use loadComponent here as you do not want to leak the internals of your feature into your app
    loadChildren: () => import('./features/chat/chat.routes').then(m => m.chatRoutes),
    title: 'Retro - Chat',
    canActivate: [authGuard],
  },
  // {
  //   path: 'saved/todo',
  //   loadComponent: () => import('./features/saved/components/saved/saved').then(m => m.Saved),
  // },
  // {
  //   path: 'calendar',
  //   loadComponent: () => import('./features/calendar/components/calendar/calendar').then(m => m.Calendar),
  // },
  // {
  //   path: 'settings',
  //   loadComponent: () => import('./features/settings/components/settings/settings').then(m => m.Settings),
  // },
  // {
  //   path: 'profile',
  //   loadComponent: () => import('./features/profile/components/profile/profile').then(m => m.Profile),
  // },
  {
    path: '404',
    component: NotFound,
    title: 'Retro - Not found',
  },
  {
    path: 'sandbox',
    loadComponent: () => import('./shared/components/sandbox/sandbox').then(m => m.Sandbox),
    title: 'Retro - Sandbox',
  },
  { path: '**', redirectTo: '404' },
];
