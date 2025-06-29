import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Switch } from '../switch/switch';
import { Label } from '../label/label';
import { InputComponent } from '../input/input';
import { Tabs } from '../tabs/tabs';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card/card';
import { SidebarTriggerComponent } from '../sidebar/sidebar';
import { Sheet } from '../sheet/sheet';

@Component({
  selector: 'rtr-sandbox',
  imports: [
    Button,
    Switch,
    Label,
    InputComponent,
    Tabs,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    SidebarTriggerComponent,
    CardContent,
    CardFooter,
    Sheet,
  ],
  templateUrl: './sandbox.html',
  styleUrl: './sandbox.css',
})
export class Sandbox {}
