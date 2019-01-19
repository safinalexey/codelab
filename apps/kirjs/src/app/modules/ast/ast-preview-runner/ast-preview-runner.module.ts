import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstPreviewRunnerComponent } from './ast-preview-runner.component';
import { FormsModule } from '@angular/forms';
import { AngularAstVizModule } from '../../../../../../../libs/angular-ast-viz/src';

@NgModule({
  imports: [CommonModule, FormsModule, AngularAstVizModule],
  declarations: [AstPreviewRunnerComponent],
  exports: [AstPreviewRunnerComponent]
})
export class AstPreviewRunnerModule {}
