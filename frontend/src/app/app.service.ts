import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Etudiant } from './Etudiant';
import { Sujet } from './Sujet';
import { Groupe, GroupeRequest } from './Groupe';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // Add Etudiant - Creation
  ajoutE(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.url}ajoutE`, etudiant)
      .pipe(catchError(this.handleError));
  }
  // Add Sujet - Creation
  ajoutS(sujet: Sujet): Observable<Sujet> {
    return this.http.post<Sujet>(`${this.url}ajoutS`, sujet)
      .pipe(catchError(this.handleError));
  }
  // Generer les groupes - Creation
  genereGroupes(groupe: GroupeRequest): Observable<Groupe[]> {
    return this.http.post<Groupe[]>(this.url+'groupe', groupe)
      .pipe(catchError(this.handleError));
  }

  // Get Etudiants - Lecture
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.url+'etudiants')
      .pipe(catchError(this.handleError));
  }
  // Get Sujets - Lecture
  getSujets(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(this.url+'sujets')
      .pipe(catchError(this.handleError));
  }
  // Get Groupes - Lecture
  getGroupes(): Observable<Groupe[][]> {
    return this.http.get<Groupe[][]>(this.url+'groupes')
      .pipe(catchError(this.handleError));
  }

}