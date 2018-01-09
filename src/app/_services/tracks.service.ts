import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Track } from '../_objects/track';
declare var $:any;

@Injectable()
export class TracksService {

  url = 'http://localhost:3000'
  tracks: Track[] = null
  selectedTrack:Track = new Track()
  subsribers = []

  constructor(private http: HttpClient) { 
    this.initializeData();
  }

  private initializeData(): Observable<Track[]> {
    return this.http.get<Track[]>(this.url)
      .pipe(
        tap(tracks => {
          console.log('Fetched tracks');
          this.tracks = tracks
        }),
        catchError(this.handleError('initializeData', [])),
        map(tracks => {
          return tracks.map(track => {
            var trackObj = new Track()
            trackObj.id = track.id
            trackObj.name = track.name
            trackObj.start = track.start
            trackObj.brutos = track.brutos

            return trackObj
          })
        })
      )
  }
  
  public getTracks(callback) {
    if (!this.tracks) {
      this.initializeData().subscribe((tracks) => {
        this.tracks = tracks
        callback(tracks)
      })
    } else {
      callback(this.tracks)
    }
  }

  public getTrackById(id: string, callback) {
    this.getTracks((tracks) => {
      callback(tracks.find((track) => track.id === parseInt(id)))
    })
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
