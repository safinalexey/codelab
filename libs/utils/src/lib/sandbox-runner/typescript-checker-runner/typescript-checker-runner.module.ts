import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptCheckerRunnerComponent } from './typescript-checker-runner.component';
import { TestResultsModule } from '@codelab/utils/src/lib/test-results/test-results.module';

@NgModule({
  declarations: [TypescriptCheckerRunnerComponent],
  exports: [TypescriptCheckerRunnerComponent],
  imports: [CommonModule, TestResultsModule]
})
export class TypescriptCheckerRunnerModule {}
