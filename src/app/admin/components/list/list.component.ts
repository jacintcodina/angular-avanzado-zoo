import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../../services/animal.services';
import { UploadService } from '../../../services/upload.services';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Console } from 'console';

// Declaro las variables de jQuery
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService]
})

export class ListComponent implements OnInit{
      public title : string;
      public numbers = new Array(10);
      public animals: Animal[];
      public token;
      public busqueda;
      
      
      constructor (
        private _route : ActivatedRoute,
        private _router : Router,
        private _animalService : AnimalService,
        private _userService: UserService

      ){
        this.title = "listado de animales";
        this.token = this._userService.getToken();
    }

    ngOnInit(){
          this.getAnimals();
    }

    getAnimals(){
      this._animalService.getAnimals().subscribe(
        response => {
            if (!response.animals){
                
            }else{
                this.animals = response.animals;
            }
        }, error => {
            console.log(<any>error)
        }
      );
    }

    deleteAnimal(id){      
       
      $('#myModal-'+ id+" .close").click();  // treure el model en jquery
       
    
      this._animalService.deleteAnimal(this.token, id).subscribe(
          response => {
    
              if(!response.animal){
                alert('Error en servidor');
              }else{
                this.getAnimals();
              }
          }, error =>{
              alert('Error en servidor');
          }

      );
    }

}