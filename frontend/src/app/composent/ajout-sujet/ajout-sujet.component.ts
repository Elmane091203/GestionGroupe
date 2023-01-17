import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ajout-sujet',
  templateUrl: './ajout-sujet.component.html',
  styleUrls: ['./ajout-sujet.component.css']
})
export class AjoutSujetComponent {
  constructor(private service: AppService, private router: Router) {}
  data: any;

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.service.ajoutS(this.data).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/sujets']);
  }
}
