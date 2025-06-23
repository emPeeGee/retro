import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/components/button/button";
import { Switch } from "./shared/components/switch/switch";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Switch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'retro';
}
