import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  RdxTabsContentDirective,
  RdxTabsListDirective,
  RdxTabsRootDirective,
  RdxTabsTriggerDirective,
} from '@radix-ng/primitives/tabs';
@Component({
  selector: 'rtr-tabs',
  imports: [NgClass, RdxTabsRootDirective, RdxTabsListDirective, RdxTabsTriggerDirective, RdxTabsContentDirective],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {}
