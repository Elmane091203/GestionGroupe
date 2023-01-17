import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEtudiantComponent } from './composent/ajout-etudiant/ajout-etudiant.component';
import { AjoutSujetComponent } from './composent/ajout-sujet/ajout-sujet.component';
import { FormationGroupeComponent } from './composent/formation-groupe/formation-groupe.component';
import { ListeEtudiantComponent } from './composent/liste-etudiant/liste-etudiant.component';
import { ListeGroupesComponent } from './composent/liste-groupes/liste-groupes.component';
import { ListeSujetComponent } from './composent/liste-sujet/liste-sujet.component';

const routes: Routes = [
  { path: '', component: ListeEtudiantComponent },
  { path: 'ajoutE', component: AjoutEtudiantComponent },
  { path: 'sujets', component: ListeSujetComponent },
  { path: 'ajoutS', component: AjoutSujetComponent },
  { path: 'groupe', component: FormationGroupeComponent },
  { path: 'groupes', component: ListeGroupesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }