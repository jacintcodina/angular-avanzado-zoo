import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
        <div *ngIf="emailContacto">
             <h4> {{title}}</h4>
            <span> Email: {{emailContacto}}
            </span>
        </div>
  `
})

export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'mostrar email';
  emailContacto  : string;
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.emailContacto = localStorage.getItem('emailContacto');

  }
  

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  
}