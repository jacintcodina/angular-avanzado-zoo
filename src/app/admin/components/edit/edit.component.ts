import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../../services/animal.services';
import { UploadService } from '../../../services/upload.services';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [UserService,AnimalService, UploadService]
})
export class EditComponent {
  public title : string;
  public animal : Animal;
  public identity;
  public token;
  public url:string;
  public status;
  public is_edit;

  constructor (
      private _route : ActivatedRoute,
      private _router : Router,
      private _userService : UserService,
      private _animalService : AnimalService,
      private _uploadService : UploadService
  ){
      this.is_edit = true;
      this.title = 'Editar animal';
      this.animal = new Animal ('','','',2017,'','');
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('animal add');
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

  onSubmit(){

      var id=this.animal._id;
      this._animalService.editAnimal (this.token, id, this.animal).subscribe(        
          response => {
              if(!response.animal){
                this.status ='error';
              }else {
                this.status = "success";
                this.animal = response.animal;

                //image
                if (!this.filesToUpload){
                    this._router.navigate(['/animal', this.animal._id]);
                }else{
                  this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
                  .then((result: any) =>{
                    
                        this.animal.image = result.image;                                             
                        this._router.navigate(['/animal', this.animal._id]);
                  });
                }                             
              }
          },
          error => {
              var errorMessage = <any> error;
              if (errorMessage != null){
                this.status ='error';
              }
          }
      );       
  }

   public filesToUpload: Array <File>  
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log (this.filesToUpload)
  }


  
}