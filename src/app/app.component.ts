import { Component,OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'NGZOO';
  emailContacto:string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    console.log('a borrar');
    localStorage.removeItem('emailContacto');
    localStorage.clear(); //Esto borra todos los items del localstorage
    this.emailContacto=null;
  }
}
