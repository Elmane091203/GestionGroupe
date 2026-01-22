import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CommonModule } from '@angular/common';
import { Groupe } from 'src/app/Groupe';

@Component({
  selector: 'app-liste-groupes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-groupes.component.html',
  styleUrls: ['./liste-groupes.component.css']
})
export class ListeGroupesComponent implements OnInit {
  groupes: Groupe[][] | undefined;
  taille: number;

  constructor(private service: AppService, private router: Router) {
    this.taille = 0;
  }

  ngOnInit(): void {
    this.service.getGroupes().subscribe({
      next: (data) => {
        this.groupes = data;
        this.taille = data.length;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des groupes:', error);
        alert('Erreur lors de la récupération des groupes. Veuillez réessayer.');
      }
    });
  }
}
