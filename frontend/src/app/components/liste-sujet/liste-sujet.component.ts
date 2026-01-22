import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CommonModule } from '@angular/common';
import { Sujet } from 'src/app/Sujet';

@Component({
  selector: 'app-liste-sujet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-sujet.component.html',
  styleUrls: ['./liste-sujet.component.css']
})
export class ListeSujetComponent implements OnInit {
  sujets: Sujet[] | undefined

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.service.getSujets().subscribe({
      next: (data) => {
        this.sujets = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des sujets:', error);
        alert('Erreur lors de la récupération des sujets. Veuillez réessayer.');
      }
    });
  }

}
