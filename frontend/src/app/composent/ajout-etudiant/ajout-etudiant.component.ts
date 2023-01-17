import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css'],
})
export class AjoutEtudiantComponent implements OnInit {
  constructor(private service: AppService, private router: Router) {}
  data: any;

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.service.ajoutE(this.data).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/']);
  }
}
