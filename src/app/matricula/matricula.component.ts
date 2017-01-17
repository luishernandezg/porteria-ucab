import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css'],
  providers: [DataBaseService]
})
export class MatriculaComponent implements OnInit {

  /**
     * Tabla automovil
     *
     * @param ano          number
     * @param color        string
     * @param matricula    string
     * @param modelo       string
     * 
     **/
  
  constructor( private router: Router,
  private dataBaseService: DataBaseService,
  private http: Http) { }

  ngOnInit() {
  }

}
