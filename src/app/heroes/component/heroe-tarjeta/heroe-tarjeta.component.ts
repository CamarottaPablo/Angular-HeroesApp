import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent {

  @Input() heroe!: Heroe;

  constructor( activatedRoute: ActivatedRoute ) {}

  


}
