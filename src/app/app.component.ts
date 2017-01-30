import { Component } from '@angular/core';
import { DataBaseService } from './data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataBaseService]
})
export class AppComponent {
  title = 'app works!';

  constructor(){
    localStorage.setItem("nombre", "Invitado");
  }
  
}
