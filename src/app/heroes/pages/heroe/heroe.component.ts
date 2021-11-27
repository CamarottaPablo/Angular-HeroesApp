import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService :  HeroesService) { }

  ngOnInit(): void {
    //id del heroe
    // y mostrarlo en consola
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroePorId(id) )
    )
      .subscribe( heroe => this.heroe = heroe );

  }

}
