import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  
  heroes:Heroe[] = [];
  
  constructor(private _heroeService:HeroesService, private router:Router){
    
  }
  
  ngOnInit(): void {
    /*Llenamos el arreglo de heroes accediento con el método getHeroes()*/
    this.heroes = this._heroeService.getHeroes();
    //console.log(this.heroes); 
  }
  
  /**
   * 
   * @param id ID del Heroe Seleccionado
   */
  VerHeroe(id:number){
    this.router.navigate(['/info-heroe', id]);
  }
}
