import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { HousingLocationComponent } from './component/housing-location/housing-location.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import routeConfig from './routes';

@NgModule({
  declarations: [
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    RouterOutlet,

  ]
})


export class AppModule { }