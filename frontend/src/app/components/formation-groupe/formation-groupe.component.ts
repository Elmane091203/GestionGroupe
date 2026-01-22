import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CommonModule } from '@angular/common';
import { Sujet } from 'src/app/Sujet';
import { Groupe } from 'src/app/Groupe';

@Component({
  selector: 'app-formation-groupe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formation-groupe.component.html',
  styleUrls: ['./formation-groupe.component.css'],
})
export class FormationGroupeComponent implements OnInit {
  constructor(private service: AppService, private router: Router) {}
  sujets: Sujet[] | undefined;
  nb: string | null = null;
  groupes: Groupe[] | undefined;

  form = new FormGroup({
    nb: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submit() {
    const nbValue = this.form.value['nb'];
    if (!nbValue) return;
    
    this.nb = nbValue;
    console.log(this.nb);
    this.service.getSujets().subscribe({
      next: (data) => {
        this.sujets = data;
        const nbNumber = parseInt(nbValue);
        if (nbNumber <= this.sujets.length) {
          this.service.genereGroupes({ nb: nbValue }).subscribe({
            next: (groupesData) => {
              this.groupes = groupesData;
            },
            error: (error) => {
              console.error('Erreur lors de la génération des groupes:', error);
              alert('Erreur lors de la génération des groupes. Veuillez réessayer.');
            }
          });
        } else {
          const reponse = confirm(
            "Il n'y a pas assez de sujet voulez vous augmenter les sujets?"
          );
          if (reponse === true) {
            this.router.navigate(['/ajoutS']);
          } else {
            alert('Veuillez alors saisir un nombre raisonnable de groupe');
          }
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des sujets:', error);
        alert('Erreur lors de la récupération des sujets. Veuillez réessayer.');
      }
    });
  }
}
