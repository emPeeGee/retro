import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  InputComponent,
  Label,
  Sheet,
  SidebarComponent,
  SidebarRailComponent,
  SidebarTriggerComponent,
  Switch,
  Tabs,
} from '@app/shared/components';

@Component({
  selector: 'rtr-root',
  imports: [
    RouterOutlet,
    Button,
    Switch,
    InputComponent,
    Label,
    Sheet,
    Tabs,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
    CardFooter,
    SidebarComponent,
    SidebarTriggerComponent,
    SidebarRailComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'retro';
}
