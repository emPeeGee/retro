import { Component } from '@angular/core';
import { ConversationsList } from '../conversations-list/conversations-list';

@Component({
  selector: 'rtr-chat',
  imports: [ConversationsList],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {}
