import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// For Angular Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Angular Router
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: 'apartment/:id', component: ApartmentComponent },
  // {
  //   path: 'apartments',
  //   component: AllApartmentsComponent
  // },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
