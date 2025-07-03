import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConversationsList } from '../conversations-list/conversations-list';

@Component({
  selector: 'rtr-chat',
  imports: [ConversationsList, RouterOutlet],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {}
