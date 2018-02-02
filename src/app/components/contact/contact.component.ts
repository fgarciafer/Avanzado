import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})


export class ContactComponent implements OnInit{
  title = 'Contacto';
  public emailContacto:string;

  ngOnInit(){
    console.log('conctact.component cargado');
  }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);
//    localStorage.getItem('emailConcacto');
  }
}
