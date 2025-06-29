import { Routes } from '@angular/router';
import { NotFound } from './shared/components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  {
    path: 'chat',
    loadComponent: () => import('./features/chat/components/chat/chat').then(m => m.Chat),
    title: 'Retro - Chat',
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
