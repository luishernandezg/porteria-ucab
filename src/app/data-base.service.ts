import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Puesto } from './puesto';
import { Usuario } from './usuario';
import { Automovil } from './automovil';
import { Entrada } from './entrada';
import { Salida } from './salida';
import { Token } from './token';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';




@Injectable()
export class DataBaseService {
  private insertUsuarioUrl = 'http://localhost/api-porteria/insert_usuario.php';  // URL web api
  private insertEntradaUrl = 'http://localhost/api-porteria/insert_entrada.php';
  private insertAutomovilUrl = 'http://localhost/api-porteria/insert_automovil.php';
  private getPuestoUrl = 'http://localhost/api-porteria/obtener_puesto.php';
  private baseUrl = 'http://localhost/api-porteria/test.php';
  private getEntradaUrl = 'http://localhost/api-porteria/get_entrada.php';
  private getSalidaUrl = 'http://localhost/api-porteria/get_salida.php';
   private loginUrl = 'http://localhost/api-porteria/login.php';
  private heroesUrl ="app/data.json";
  data: Object;
  public palabra : string ="";

  constructor(private http: Http) { }



  getEntrada(): Observable<Entrada[]> {
    return this.http.get( this.getEntradaUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


    getSalida(): Observable<Salida[]> {
    return this.http.get( this.getSalidaUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


    login(email : string,clave : string): Observable<Token> {
    return this.http.get( this.loginUrl+"?email="+email+"&"+"clave="+clave)
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
       * Inserta en la Tabla usuario
       *
       * @param  $cedula          string
       * @param  $nroexp          string
       * @param  $nombre          string
       * @param  $apellido        string
       * @param  $correo          string
       * @param  $telefono        string
       * @param  $clave           string
       * @return number 201(creado) 202(fallido)
       */

 insertUsuario (nuevoUsuario : Usuario): Observable<number> {
    return this.http.post( this.insertUsuarioUrl,JSON.stringify({
        cedula: nuevoUsuario.cedula,
        nroexp: nuevoUsuario.nroexp,
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        correo: nuevoUsuario.correo,
        telefono: nuevoUsuario.telefono,
        clave: nuevoUsuario.clave,
  }))
     .map(this.extractDataPost)
     .catch(this.handleError);
  }


  private extractData(res: Response) {
    console.log(`estatus: ${res.status}`);
    let body = res.json();

    console.log(`Contenido: ${body}`);
    return body || { };
  }
    private extractDataPost(res: Response) {

    return res.status;
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


  getPalabra(){
    this.palabra = this.palabra + "LA"
    return this.palabra;
  }






 /**
     * Insertar en la Tabla automovil
     *
     * @param  $matricula       string        
     * @param  $modelo          string
     * @param  $ano             int          
     * @param  $color           string
     * @return number 201(creado) 202(fallido)
     * 
     */

    insertAutomovil(nuevoAutomovil :Automovil): Observable<number>{
        return this.http.post( this.insertAutomovilUrl,JSON.stringify({
          matricula: nuevoAutomovil.matricula,
          modelo: nuevoAutomovil.modelo,
          ano: nuevoAutomovil.ano,
          color: nuevoAutomovil.color,
  }))
     .map(this.extractDataPost)
     .catch(this.handleError);
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
