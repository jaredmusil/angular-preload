import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { PreferencesComponent } from './views/preferences/preferences.component';
import { PetsModule } from '@angular-preload/pets';

@NgModule({
  declarations: [ 
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'preferences', component: PreferencesComponent },
      { path: 'pets', loadChildren: () => import('@angular-preload/pets').then(m => PetsModule) },
      { path: '**', redirectTo: 'home' }
    ],
    {
      initialNavigation: 'enabled',
      useHash: true,
    })
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}


