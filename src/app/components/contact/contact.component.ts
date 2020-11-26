import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = 'Contacto';
  emailContacto : string;

  constructor() { }

  ngOnInit(): void {
    
  }

  guardarEmail () {
        localStorage.setItem('emailContacto', this.emailContacto);
    
  }

}
