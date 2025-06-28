import { Component, contentChild, ElementRef, viewChild } from '@angular/core';
import { provideRdxDialog, RdxDialogConfig, RdxDialogModule } from '@radix-ng/primitives/dialog';

@Component({
  selector: 'app-sheet',
  imports: [RdxDialogModule],
  templateUrl: './sheet.html',
  styleUrl: './sheet.css',
  providers: [provideRdxDialog()],
})
export class Sheet {
  readonly sheetTpl = contentChild('sheetTpl', {});

  readonly sheetTplRef = viewChild<ElementRef>('sheetTpl');

  config: RdxDialogConfig<unknown> = {
    backdropClass: 'cdk-overlay-dark-backdrop',
    mode: 'sheet-right',
    panelClasses: ['DialogSheet'],
    content: this.sheetTplRef()?.nativeElement,
  };
}
