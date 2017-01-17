import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Mensaje } from '../mensaje';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataBaseService]
})
export class LoginComponent implements OnInit {
  palabra :string;

  constructor( private router: Router,private dataBaseService: DataBaseService) { 
    
  }

  ngOnInit() {
  }
goToPage(){

  this.router.navigate(["/matricula"]);
}

decirMensaje(){
  this.palabra = this.dataBaseService.getHola();
}


}
