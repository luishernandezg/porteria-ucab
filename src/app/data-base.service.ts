import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Puesto } from './puesto';
import { Usuario } from './usuario';
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


  /**
       * Reflejo de la Tabla usuario
       *
       * @param $cedula          string
       * @param $nroexp          string
       * @param $nombre          string
       * @param $apellido        string
       * @param $correo          string
       * @param $telefono        string
       * @param $clave           string
       */

 insertUsuario (nuevoUsuario : Usuario): Observable<Mensaje[]> {
    return this.http.post( this.insertUsuarioUrl,JSON.stringify({
        cedula: nuevoUsuario.cedula,
        nroexp: nuevoUsuario.nroexp,
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        correo: nuevoUsuario.correo,
        telefono: nuevoUsuario.telefono,
        clave: nuevoUsuario.clave,
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
