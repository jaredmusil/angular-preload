import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { PreferencesComponent } from './views/preferences/preferences.component';


@NgModule({
  declarations: [ 
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'preferences', component: PreferencesComponent },
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


