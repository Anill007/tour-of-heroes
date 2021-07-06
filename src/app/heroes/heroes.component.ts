import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // // hero = "windstorm"
  // hero: Hero = {
  //   id: 1,
  //   name: "windstorm"
  // }

  heroes: Hero[] = []
  selectedHero?: Hero
  
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero
    this.messageService.addMessage(`HeroesComponent: Selected Hero id=${hero.id}`)
  }

}
