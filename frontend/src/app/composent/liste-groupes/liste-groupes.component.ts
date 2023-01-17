import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-liste-groupes',
  templateUrl: './liste-groupes.component.html',
  styleUrls: ['./liste-groupes.component.css']
})
export class ListeGroupesComponent implements OnInit {
  groupes: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getGroupes().subscribe(data => {
      this.groupes = data;
    })
  }
}
