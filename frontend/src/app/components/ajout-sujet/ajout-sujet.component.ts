import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CommonModule } from '@angular/common';
import { Sujet } from 'src/app/Sujet';

@Component({
  selector: 'app-ajout-sujet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-sujet.component.html',
  styleUrls: ['./ajout-sujet.component.css']
})
export class AjoutSujetComponent implements OnInit {
  constructor(private service: AppService, private router: Router) {}

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submit() {
    if (!this.form.valid) {
      return;
    }

    const formValue = this.form.value;
    const sujet: Sujet = {
      id: 0,
      nom: formValue.nom || ''
    };

    console.log(sujet);

    this.service.ajoutS(sujet).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/sujets']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du sujet:', error);
        alert('Erreur lors de l\'ajout du sujet. Veuillez réessayer.');
      }
    });
  }
}
