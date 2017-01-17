import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Puesto } from '../puesto';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css'],
  providers: [DataBaseService]
})
export class EstacionamientoComponent implements OnInit {
  mensajes: Mensaje[]=[];
  puestos: Puesto[]=[];
  loading: boolean;
  visible = false;
   /**
     *        Tabla entrada
     *
     * @param fecha        string->date
     * @param hora         string->time
     * @param matricula    string
     * @param puesto       number
     * 
     **/

  constructor( private router: Router,
  private dataBaseService: DataBaseService,
  private http: Http) {


  
   }

  ngOnInit() {
 
          this.actualizarPuesto();

  }

   actualizarPuesto() {
     this.dataBaseService.getPuestos(
      ).subscribe(puestos =>{
                    this.puestos = puestos;
                 } );
     }

   insert(
      matricula: HTMLInputElement,
      puesto: HTMLInputElement
   
    ) {
     this.dataBaseService.insertEntrada(
       matricula.value,
      parseInt(puesto.value) 
      )
                   .subscribe(
                     mensajes =>{
                       this.mensajes = mensajes;
                       this.loading = false;
                       this.visible = true;

                       } );
     }

}
