import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellSidebar } from '@app/shared/layout';

@Component({
  selector: 'rtr-root',
  imports: [RouterOutlet, ShellSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'retro';
}
