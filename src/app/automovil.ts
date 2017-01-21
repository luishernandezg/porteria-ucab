 /**
     * Reflejo de la Tabla automovil
     *
     * @param  $matricula       string        
     * @param  $modelo          string
     * @param  $ano             int          
     * @param  $color           string
     * 
     */

export class Automovil {
  public matricula: string;
  public modelo: string;
  public ano: number;
  public color: string;


  constructor(
      matricula : string,
      modelo : string,
      ano : number,
      color : string
     
  ){

      this.matricula = matricula;
      this.modelo = modelo;
      this.ano = ano;
      this.color = color;
    

   }

}