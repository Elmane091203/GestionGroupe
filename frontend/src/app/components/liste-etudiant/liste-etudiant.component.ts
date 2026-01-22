import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CommonModule } from '@angular/common';
import { Etudiant } from 'src/app/Etudiant';

@Component({
  selector: 'app-liste-etudiant',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {

etudiants: Etudiant[] | undefined

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.service.getEtudiants().subscribe({
      next: (data) => {
        this.etudiants = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des étudiants:', error);
        alert('Erreur lors de la récupération des étudiants. Veuillez réessayer.');
      }
    });
  }

}
