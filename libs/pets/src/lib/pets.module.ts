import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pet/pet.component';
import { UtilsModule } from '@angular-preload/utils';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
  ],
  declarations: [
    PetsComponent,
    PetComponent,
  ],
  exports: [
    PetsComponent,
    PetComponent,
  ],
})
export class PetsModule {}
