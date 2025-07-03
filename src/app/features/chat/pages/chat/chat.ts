import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConversationsList } from '@app/features/chat/pages';

@Component({
  selector: 'rtr-chat',
  imports: [ConversationsList, RouterOutlet],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {}
