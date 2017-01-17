import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css'],
  providers: [DataBaseService]
})
export class CambiarContrasenaComponent implements OnInit {

  constructor( private router: Router,
  private dataBaseService: DataBaseService,
  private http: Http) { }

  ngOnInit() {
  }

}
