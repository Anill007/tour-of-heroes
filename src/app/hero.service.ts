import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';
import { Observable, observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const result = of(Heroes)
    this.messageService.addMessage('HeroService: Fetched Heroes')
    return result;
  }

  getHero(id:number): Observable<Hero> {
    const hero = Heroes.find(h => h.id == id)!
    this.messageService.addMessage('HeroService: Found Hero of id=' + id)
    return of(hero)
  }
}
