import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarRailComponent } from '@app/shared/components';
import { Link } from './shared/components/link/link';

@Component({
  selector: 'rtr-root',
  imports: [RouterOutlet, SidebarComponent, SidebarRailComponent, Link],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'retro';
}
