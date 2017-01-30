import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public usuario:string = "";

  constructor() { 
    this.usuario = sessionStorage.getItem("nombre");
  }

  ngOnInit() {
    this.usuario = sessionStorage.getItem("nombre");
  }

}
