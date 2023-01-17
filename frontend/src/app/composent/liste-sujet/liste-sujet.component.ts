import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-liste-sujet',
  templateUrl: './liste-sujet.component.html',
  styleUrls: ['./liste-sujet.component.css']
})
export class ListeSujetComponent {
  sujets: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getSujets().subscribe(data => {
      this.sujets = data;
    })
  }

}
