import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Token } from '../token';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataBaseService]
})
export class LoginComponent implements OnInit {
  alerta :string = "";
  token :Token;
    loading : boolean;
  visible = false;
  creado : boolean;
  nocreado : boolean;
  responseCode : number = 0;
  

  constructor( private router: Router,private dataBaseService: DataBaseService) { 
    
  }

  ngOnInit() {
  }
goToPage(){

  this.router.navigate(["/matricula"]);
}

  palabra(){
    this.alerta = this.dataBaseService.getPalabra();


  }

  getToken(email: HTMLInputElement,clave: HTMLInputElement,){
    
    

     this.dataBaseService.login(email.value,clave.value)
                   .subscribe(
                     token =>{
                       this.token = token;                     
                      this.loading = false;
                       this.creado = false;
                       this.nocreado = false;
                      
                       
                       console.log(`token: ${this.token.nombre} `);
                       if(this.token.ci != "0"){
                          sessionStorage.removeItem("nombre");
                          sessionStorage.setItem("nombre", this.token.nombre);
                          this.visible = true;
                          this.creado = true;
                          this.alerta ="Logueo exitoso";
                          this.router.navigate(["/estadisticas"]);
                       }else{
                          this.nocreado = true;
                          this.alerta ="Email o Contraseña incorrectos";
                          
                       }
                       } );
                        

     }


  



}
