import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './/mock-heroes';
import { MessageService } from './message.service';

// By default, ng generate service registers a provider with the root injector for your service by including provider metadata, that's providedIn: 'root' in the @Injectable() decorator.
@Injectable({
  providedIn: 'root'
})

//When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.


export class HeroService {

  // get hero data:

  // getHeroes():Hero[] {
  //   return HEROES;
  // }

  private heroesUrl = 'api/heroes';  // URL to web api
  /** Log a HeroService message with the MessageService */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
      );
    }

/** DELETE: delete the hero from the server */
deleteHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  
  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}
getHero(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(hero)

    
  }
  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
    }



}


// service-in-service scenario in which I inject the MessageService into the HeroService which is injected into the HeroesComponent.