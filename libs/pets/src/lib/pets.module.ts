import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetsPageComponent } from './pets-page/pets-page.component';
import { UtilsModule } from '@angular-preload/utils';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PetsPageComponent },
    ]),
  ],
  declarations: [
    PetsComponent,
    PetsPageComponent,
  ],
  exports: [
    PetsPageComponent,
  ],
})
export class PetsModule {}
