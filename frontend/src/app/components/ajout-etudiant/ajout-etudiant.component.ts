import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CommonModule } from '@angular/common';
import { Etudiant } from 'src/app/Etudiant';

@Component({
  selector: 'app-ajout-etudiant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css'],
})
export class AjoutEtudiantComponent implements OnInit {
  constructor(private service: AppService, private router: Router) {}

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required, Validators.email]),
  });
  ngOnInit(): void {}
  submit() {
    if (!this.form.valid) {
      return;
    }

    const formValue = this.form.value;
    const etudiant: Etudiant = {
      id: 0,
      nom: formValue.nom || '',
      prenom: formValue.prenom || '',
      adresse: formValue.adresse || ''
    };

    console.log(etudiant);

    this.service.ajoutE(etudiant).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
        alert('Erreur lors de l\'ajout de l\'étudiant. Veuillez réessayer.');
      }
    });
  }
}
