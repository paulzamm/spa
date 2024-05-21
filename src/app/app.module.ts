import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesService } from './services/heroes.service';
import { InfoHeroeComponent } from './components/info-heroe/info-heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    InfoHeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  /*Todos los Servicios que se usarán*/
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
