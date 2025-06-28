import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { provideRdxDialog, RdxDialogConfig, RdxDialogModule } from '@radix-ng/primitives/dialog';

@Component({
  selector: 'app-sheet',
  imports: [RdxDialogModule],
  templateUrl: './sheet.html',
  styleUrl: './sheet.css',
  providers: [provideRdxDialog()],
})
export class Sheet {
  @ContentChild('sheetTpl', { static: true }) sheetTpl: any;

  @ViewChild('sheetTpl') myTemplateRef!: TemplateRef<any>;

  config: RdxDialogConfig<any> = {
    backdropClass: 'cdk-overlay-dark-backdrop',
    mode: 'sheet-right',
    panelClasses: ['DialogSheet'],
    // content will be set dynamically, so it's omitted here
    // content: null,
    content: this.myTemplateRef,
    data: {},
  };
}
