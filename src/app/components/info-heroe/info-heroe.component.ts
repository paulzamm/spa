import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
  styleUrl: './info-heroe.component.css'
})
export class InfoHeroeComponent {
  
  heroe: any= {};

  constructor(private activateRoute:ActivatedRoute, private _heroeService:HeroesService){
    //Recibir el id del Heroe seleccionado
    this.activateRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }
}
