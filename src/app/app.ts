import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/components/button/button";
import { Switch } from "./shared/components/switch/switch";
import { InputComponent } from "./shared/components/input/input";
import { Label } from "./shared/components/label/label";
import { Sheet } from "./shared/components/sheet/sheet";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Switch, InputComponent, Label, Sheet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'retro';
}
