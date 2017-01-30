import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Entrada } from '../entrada';
import { Salida } from '../salida';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  providers: [DataBaseService]
})
export class EstadisticasComponent implements OnInit {


entradas: Entrada[]=[];
salidas: Salida[]=[];
  constructor(
  private dataBaseService: DataBaseService,
  private http: Http) {}

  ngOnInit() {

     this.actualizarEntrada();
     this.actualizarSalida();
  }


   actualizarEntrada() {
     this.dataBaseService.getEntrada(
      ).subscribe(entradas =>{
                    this.entradas = entradas;
                 } );
     }

      actualizarSalida() {
     this.dataBaseService.getSalida(
      ).subscribe(salidas =>{
                    this.salidas = salidas;
                 } );
     }

}
