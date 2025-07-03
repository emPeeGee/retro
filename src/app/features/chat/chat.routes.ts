import { Routes } from '@angular/router';
import { Chat, Conversation, NoConversation } from '@app/features/chat/pages';

export const chatRoutes: Routes = [
  {
    path: '',
    component: Chat,
    children: [
      { path: '', component: NoConversation },
      { path: ':id', component: Conversation },
    ],
  },
];
