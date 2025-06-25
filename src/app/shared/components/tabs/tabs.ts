import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
    RdxTabsRootDirective,
    RdxTabsListDirective,
    RdxTabsTriggerDirective,
    RdxTabsContentDirective } from '@radix-ng/primitives/tabs';
@Component({
  selector: 'app-tabs',
  imports: [ NgClass,   RdxTabsRootDirective,
    RdxTabsListDirective,
    RdxTabsTriggerDirective,
    RdxTabsContentDirective ],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {

}
