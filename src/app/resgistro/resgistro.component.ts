import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css'],
  providers: [DataBaseService]
})
export class ResgistroComponent implements OnInit {
  //Inicializa el array para poder usarlo
  /**
     *      Tabla usuario
     *
     * @param cedula          string
     * @param nombre          string
     * @param apellido        string
     * @param telefono        string
     * @param correo          string
     * @param nroexp          string
     * @return 
     */
  mensajes: Mensaje[]=[];
  loading: boolean;
  visible = false;
 
 
  constructor( private router: Router,
  private dataBaseService: DataBaseService,
  private http: Http) { 
    
  }

    ngOnInit() {
  }

  insert(
    cedula: HTMLInputElement,
    nroexp: HTMLInputElement,
    nombre: HTMLInputElement,
    apellido: HTMLInputElement,
    correo: HTMLInputElement,
    telefono: HTMLInputElement,
    clave: HTMLInputElement
    ) {
     this.dataBaseService.insertUsuario(
       cedula.value,
       nroexp.value,
       nombre.value,
       apellido.value,
       telefono.value,
       correo.value,
       clave.value)
                   .subscribe(
                     mensajes =>{
                       this.mensajes = mensajes;
                       this.loading = false;
                       this.visible = true;

                       } );
     }

}





