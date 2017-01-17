import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-pases',
  templateUrl: './pases.component.html',
  styleUrls: ['./pases.component.css'],
  providers: [DataBaseService]
})
export class PasesComponent implements OnInit {

  /**
     *      Tabla matrucula
     *
     * @param matricula     string
     * @param cedula        string
     * @param parentesco    string
     * 
     **/
  constructor( private router: Router,
  private dataBaseService: DataBaseService,
  private http: Http) { }

  ngOnInit() {
  }

}
