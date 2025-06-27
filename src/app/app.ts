import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/components/button/button";
import { Switch } from "./shared/components/switch/switch";
import { InputComponent } from "./shared/components/input/input";
import { Label } from "./shared/components/label/label";
import { Sheet } from "./shared/components/sheet/sheet";
import { Tabs } from "./shared/components/tabs/tabs";
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardActionComponent, CardContentComponent, CardFooterComponent } from "./shared/components/card/card";
import { SidebarComponent,  SidebarTriggerComponent, SidebarRailComponent } from "./shared/components/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Switch, InputComponent, Label, Sheet, Tabs, CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardActionComponent, CardContentComponent, CardFooterComponent, SidebarComponent,  SidebarTriggerComponent, SidebarRailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'retro';
}
