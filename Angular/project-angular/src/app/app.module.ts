import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GranjaComponent } from 'src/app/granja/granja.component';
import { AnimalesComponent } from './animales/animales.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbolesComponent } from './arboles/arboles.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GranjaComponent,
    AnimalesComponent,
    ArbolesComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
