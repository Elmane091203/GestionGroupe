import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-formation-groupe',
  templateUrl: './formation-groupe.component.html',
  styleUrls: ['./formation-groupe.component.css'],
})
export class FormationGroupeComponent {
  constructor(private service: AppService, private router: Router) {}
  sujets: any[] | undefined;
  nb: any;
  groupes: any;

  form = new FormGroup({
    nb: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submit() {
    this.nb = this.form.value['nb'];
    console.log(this.nb);
    this.service.getSujets().subscribe((data) => {
      this.sujets = data;
      if (this.nb <= this.sujets.length) {
        this.service.genereGroupes(this.nb).subscribe((data) => {
          this.groupes = (data);
        });
      } else {
        var reponse = confirm(
          "Il n'y a pas assez de sujet voulez vous augmenter les sujets?"
        );
        if (reponse == true) {
          this.router.navigate(['/ajoutS']);
        } else {
          alert('Veuillez alors saisir un nombre raisonnable de groupe');
        }
      }
    });
  }
  charge(){
    this.form.value['nb']=(this.form.value['nb']!=null && (this.form.value['nb']).toString()!="")?(parseInt(this.form.value['nb'])-1).toString():this.form.value['nb'];
  }
}
