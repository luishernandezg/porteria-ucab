import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Usuario } from '../usuario';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css'],
  providers: [DataBaseService]
})
export class ResgistroComponent implements OnInit {

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
    var nuevoUsuario : Usuario;
    nuevoUsuario = new Usuario(cedula.value,
                                nroexp.value,
                                nombre.value,
                                apellido.value,
                                telefono.value,
                                correo.value,
                                clave.value
                              );

     this.dataBaseService.insertUsuario(nuevoUsuario)
                   .subscribe(
                     mensajes =>{
                       this.mensajes = mensajes;
                       this.loading = false;
                       this.visible = true;

                       } );
     }

}
