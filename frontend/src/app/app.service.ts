import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Etudiant } from './Etudiant';
import { Sujet } from './Sujet';
import { Groupe } from './Groupe';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add Etudiant - Creation
  ajoutE(etudiant: Etudiant){
    return this.http.post<Etudiant>(`${this.url}ajoutE`, etudiant)
  }
  // Add Sujet - Creation
  ajoutS(sujet: Sujet){
    return this.http.post<Sujet>(`${this.url}ajoutS`, sujet)
  }
  // Generer les groupes - Creation
  genereGroupes(groupe: Groupe){
    return this.http.post<Groupe>(this.url+'groupe',groupe)
  }

  // Get Etudiants - Lecture
  getEtudiants(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'etudiants')
  }
  // Get Sujets - Lecture
  getSujets(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'sujets')
  }
  // Get Groupes - Lecture
  getGroupes():Observable <any[]>{
    return this.http.get<any[]>(this.url+'groupes')
  }

}