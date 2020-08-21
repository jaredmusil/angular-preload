import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  imports: [
    CommonModule,
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
