import { Routes } from '@angular/router';
import { AjoutEtudiantComponent } from './components/ajout-etudiant/ajout-etudiant.component';
import { AjoutSujetComponent } from './components/ajout-sujet/ajout-sujet.component';
import { FormationGroupeComponent } from './components/formation-groupe/formation-groupe.component';
import { ListeEtudiantComponent } from './components/liste-etudiant/liste-etudiant.component';
import { ListeGroupesComponent } from './components/liste-groupes/liste-groupes.component';
import { ListeSujetComponent } from './components/liste-sujet/liste-sujet.component';

export const routes: Routes = [
  { path: '', component: ListeEtudiantComponent },
  { path: 'ajoutE', component: AjoutEtudiantComponent },
  { path: 'sujets', component: ListeSujetComponent },
  { path: 'ajoutS', component: AjoutSujetComponent },
  { path: 'groupe', component: FormationGroupeComponent },
  { path: 'groupes', component: ListeGroupesComponent }
];

