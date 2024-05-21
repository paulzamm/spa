import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
    
  heroes:any[] = [];
  cadena:string="";


  constructor( private activateRoute:ActivatedRoute, private _heroeService:HeroesService,
    private router:Router){
    
  }

  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.cadena = params['cadena']
      this.heroes = this._heroeService.buscarHeroe(params['cadena'])
      console.log(this.heroes)
    });    
  }

  /**
   * 
   * @param id ID del Heroe Seleccionado
   */
  VerHeroe(id:number){
    this.router.navigate(['/info-heroe', id]);
  }

}  
