import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './hero-data';
import { MessageService } from './message.service';
import {Power} from './power';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

    private powerUrl = 'api/powers';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    constructor(
        private messageService: MessageService,
        private http: HttpClient,
        ) { }

    getPowers(): Observable<Power[]> {
        return this.http.get<Power[]>(this.powerUrl)
            .pipe(
                tap(_ => this.log('fetched heroes')),
                catchError(this.handleError<Power[]>('getHeroes', []))
        );
    }

    getHeroPowers(id: number): Observable<Power[]> {
        const url = `${this.powerUrl}/?heroId=${id}`;
        return this.http.get<Power[]>(url).pipe(
        tap(_ => this.log(`fetched powers for hero id=${id}`)),
        catchError(this.handleError<Power[]>(`getHero id=${id}`))
        );
    }

    private log(message: string): void {
        this.messageService.add(`PowerService: ${message}`);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

}
