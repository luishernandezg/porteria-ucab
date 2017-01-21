import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Automovil } from '../automovil';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css'],
  providers: [DataBaseService]
})
export class MatriculaComponent implements OnInit {

  loading : boolean;
  creado : boolean;
  nocreado : boolean;
  responseCode : number = 0;
  alerta : string = "";

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
    this.creado = false;
    this.nocreado = false;
  }


  insert(
    matricula: HTMLInputElement,
    modelo: HTMLInputElement,
    ano: HTMLInputElement,
    color: HTMLInputElement
    
  ) {
    var nuevoAutomovil : Automovil;
    nuevoAutomovil = new Automovil(matricula.value,
                                    modelo.value,
                                    parseInt(ano.value),
                                    color.value
                                  );

     this.dataBaseService.insertAutomovil(nuevoAutomovil)
                   .subscribe(
                     respondeCode =>{
                       this.responseCode = respondeCode;                     
                       this.loading = false;
                       this.creado = false;
                       this.nocreado = false;
                       
                       console.log(`responseCode: ${this.responseCode} `);
                       if(this.responseCode == 201){
                          this.creado = true;
                          this.alerta ="Peticion Exitosa"
                       }else{
                          this.nocreado = true;
                          this.alerta ="Peticion Fallida"
                       }
                       } );
                        

     }

}


