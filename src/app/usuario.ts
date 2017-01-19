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

export class Usuario {
  public cedula: string;
  public nroexp: string;
  public nombre: string;
  public apellido: string;
  public correo: string;
  public telefono: string;
  public clave: string;

  constructor(
      cedula : string,
      nroexpe : string,
      nombre : string,
      apellido : string,
      correo : string,
      telefono : string,
      clave : string
  ){

      this.cedula = cedula;
      this.nroexp = nroexpe;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.telefono = telefono;
      this.clave = clave;

   }

}
