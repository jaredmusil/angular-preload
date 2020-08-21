import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PetsComponent,
  ],
  exports: [
    PetsComponent,
  ],
})
export class PetsModule {}
