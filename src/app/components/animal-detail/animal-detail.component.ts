import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../services/animal.services';
import { Animal } from '../../models/animal';
import { GLOBAL } from '../../services/global';



@Component({
  
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})


export class AnimalDetailComponent implements OnInit{     
      public animal: Animal;
      public url:String;
      
      constructor (
        private _route : ActivatedRoute,
        private _router : Router,
        private _animalService : AnimalService
      ){
        this.url = GLOBAL.url;        
    }

    ngOnInit(){
        console.log("animal carregat");
        this.getAnimal();
    }

    getAnimal(){
        this._route.params.forEach((params: Params) => {
            let id =params['id'];
            this._animalService.getAnimal(id).subscribe(
                response => {
                      if(!response.animal){
                          this._router.navigate(['/home']);
                      }else{
                          this.animal = response.animal;
                          console.log(this.animal);
                      }
                },error =>{
                    this._router.navigate(['/home']);
                    console.log (<any>error);

                }
              
            );
        });

    }

}