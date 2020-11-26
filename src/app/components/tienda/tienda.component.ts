import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


import * as $ from 'jquery'; 




@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
  animations:[
    trigger('marcar', [
        state('inactive', style({
            border:'5px solid #ccc'
        })),
        state ('active', style({
            border:'5px solid yellow',
            background: 'red',
            borderRadius: '50px'
        })),
        transition('inactive => active', animate ('300ms linear')),
        transition('active => inactive', animate ('300ms linear'))
    ])
  ]

})

export class TiendaComponent implements OnInit {

    public titulo;
    public status;

  constructor() {
    this.titulo ="tienda";
    this.status= "inactive";
   }

   CambiarEstado(status){
      if (status == 'inactive'){
          this.status = 'active';
      } else {
          this.status = 'inactive';
      };

   }

  ngOnInit(): void {   
      
      $('#textojq').hide();
      $('#botonjq').click(function(){
        console.log("jq");
          $('#textojq').slideToggle();
          
          
      });
    
  }

}
