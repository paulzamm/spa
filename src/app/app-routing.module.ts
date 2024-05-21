import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InfoHeroeComponent } from './components/info-heroe/info-heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'info-heroe/:id', component:InfoHeroeComponent},
  {path: 'buscar/:cadena', component:BuscadorComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
