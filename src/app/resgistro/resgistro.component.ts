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

  loading : boolean;
  visible = false;
  creado : boolean;
  nocreado : boolean;
  responseCode : number = 0;
  alerta : string = "";


  constructor( private router: Router,
  private dataBaseService: DataBaseService,
  private http: Http) {

  }

    ngOnInit() {
     this.creado = false;
     this.nocreado = false;
  }
  palabra(){
    this.alerta = this.dataBaseService.getPalabra();


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
                     respondeCode =>{
                       this.responseCode = respondeCode;                     
                       this.loading = false;
                       this.creado = false;
                       this.nocreado = false;
                       
                       console.log(`responseCode: ${this.responseCode} `);
                       if(this.responseCode == 201){
                          this.visible = true;
                          this.creado = true;
                          this.alerta ="Peticion Exitosa"
                       }else{
                          this.nocreado = true;
                          this.alerta ="Peticion Fallida"
                       }
                       } );
                        

     }

}
