import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { AjoutEtudiantComponent } from './composent/ajout-etudiant/ajout-etudiant.component';
import { AjoutSujetComponent } from './composent/ajout-sujet/ajout-sujet.component';
import { ListeEtudiantComponent } from './composent/liste-etudiant/liste-etudiant.component';
import { ListeSujetComponent } from './composent/liste-sujet/liste-sujet.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormationGroupeComponent } from './composent/formation-groupe/formation-groupe.component';
import { ListeGroupesComponent } from './composent/liste-groupes/liste-groupes.component'

@NgModule({
  declarations: [
    AppComponent,
    AjoutEtudiantComponent,
    AjoutSujetComponent,
    ListeEtudiantComponent,
    ListeSujetComponent,
    FormationGroupeComponent,
    ListeGroupesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
