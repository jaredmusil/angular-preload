import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPipe } from './pipes/loading.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingPipe,
  ],
  exports: [
    LoadingPipe,
  ]
})
export class UtilsModule {}
