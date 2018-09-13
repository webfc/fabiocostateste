import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams,  HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
 })
};
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the database */
  addUsuario(usuario: any): Observable<any> {
    return this.http.post<Usuarios>('https://localhost:44358/api/usuarios/', JSON.stringify(usuario), httpOptions)
      .pipe(
      catchError(this.handleError)
      );
  }

  getUsuario() {

    return this.http.get<any>('https://localhost:44358/api/usuarios/').pipe(result => {
      //   this.forecasts = result;
      console.log(result);
      return result; 
    });

  }

  private handleError(error: HttpErrorResponse) {

    var errormsg = ''; 
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.    
      console.log('An error occurred:', error.error.message);
      errormsg = error.error.message; 
    } else {
      // the backend returned an unsuccessful response code.    
      // the response body may contain clues as to what went wrong,
      
      console.log(error);
      errormsg = JSON.stringify(error.error); 
    }


    var error = [{

      errormsg
    }];
    // return an observable with a user-facing error message    
    return error;
  }

}
