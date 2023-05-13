import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { AgendarComponent } from './citas/agendar/agendar.component';
import { RevisarComponent } from './citas/revisar/revisar.component';
import { CitasComponent } from './citas/citas.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContactanosComponent,
    AcercaDeComponent,
    RecomendacionesComponent,
    AgendarComponent,
    RevisarComponent,
    CitasComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
