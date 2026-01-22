import { Sujet } from './Sujet';
import { Etudiant } from './Etudiant';

export interface Groupe {
  sujet: Sujet;
  membreG: Etudiant[];
}

export interface GroupeRequest {
  nb: string;
}
