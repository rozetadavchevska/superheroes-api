import { SuperHeroService } from './services/superhero.service';
import { SuperHero } from './models/superhero';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudUI';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService){}
  ngOnInit() : void{
      this.superHeroService
      .getSuperHeroes().subscribe((result: SuperHero[]) => (this.heroes = result));
  }
}
