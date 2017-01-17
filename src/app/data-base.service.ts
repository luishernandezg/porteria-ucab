import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Puesto } from './puesto';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';




@Injectable()
export class DataBaseService {
  private insertUsuarioUrl = 'http://localhost/api-porteria/insert_usuario.php';  // URL web api
  private insertEntradaUrl = 'http://localhost/api-porteria/insert_entrada.php';
  private getPuestoUrl = 'http://localhost/api-porteria/obtener_puesto.php';
  private baseUrl = 'http://localhost/api-porteria/test.php';
  private heroesUrl ="app/data.json";
  data: Object;

  constructor(private http: Http) { }



  getPuestos(): Observable<Puesto[]> {
    return this.http.get( this.getPuestoUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

 
  insertEntrada (
      matricula: string,
      puesto:number,
    ): Observable<Mensaje[]> {
      console.log(`matrucula: ${matricula} puesto: ${puesto}`); 
    return this.http.post( this.insertEntradaUrl,JSON.stringify({
        matriculaauto: matricula,
        nropuesto: puesto,
        
  }))
                    .map(this.extractData)
                    .catch(this.handleError);
  }



 insertUsuario (
  cedula: string,
  nroexp:string,
  nombre: string,
  apellido: string,
  correo: string,
  telefono: string,
  clave: string
  ): Observable<Mensaje[]> {
    return this.http.post( this.insertUsuarioUrl,JSON.stringify({
        cedula: cedula,
        nroexp: nroexp,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,        
        clave: clave,
  }))
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    //console.log(`Adding article title: ${body[1].contenido} and link: ${"hola111"}`);
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  getHola(){
    return "hola";
  }



  /**
     *         Tabla usuario
     *
     * @param cedula          string
     * @param nombre          string
     * @param apellido        string
     * @param telefono        string
     * @param correo          string
     * @param nroexp          string
     * @return 
     */
  


 insertUsuarioo(
  cedula: string,
  nombre: string,
  apellido: string,
  telefono: string,
  correo: string
  ):Promise<Object> {
   
  return this.http.post(
  this.insertUsuarioUrl,
  JSON.stringify({
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo
  }))
  .toPromise().then(res => res.json() as Object);
  
}


 insertUsuario2(
  cedula: string,
  nombre: string,
  apellido: string,
  telefono: string,
  correo: string
  ):Promise<Mensaje> {
   
  return this.http.post(
  this.insertUsuarioUrl,
  JSON.stringify({
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo
  }))
  .toPromise().then(res => res.json() as Mensaje);
  
}


 /**
     *        Tabla automovil
     *
     * @param ano          number
     * @param color        string
     * @param matricula    string
     * @param modelo       string
     * 
     **/

    insertAutomovil(){

    }

     /**
     *      Tabla matrucula
     *
     * @param matricula     string
     * @param cedula        string
     * @param parentesco    string
     * 
     **/

    inserMatricula(){

    }
     /**
     *        Tabla entrada
     *
     * @param fecha        string->date
     * @param hora         string->time
     * @param matricula    string
     * @param puesto       number
     * 
     **/
    insertEntrda(){

    }


}




