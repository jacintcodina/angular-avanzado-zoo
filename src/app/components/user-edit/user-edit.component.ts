import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms'; 
import { UploadService } from '../../services/upload.services';



@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {
    public title : string;
    public user : User;
    public status;
    public identity;
    public token;
    public url:string;

    constructor(        
        private _userService: UserService,
        private _uploadService: UploadService

    ) { 
        this.title = 'Actualizar datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

  ngOnInit(){
        console.log('Component actualitzar carregat');        
  }

  onSubmit(){   //amb subscribe rebem la resposta 
    this._userService.upadateUser(this.user).subscribe(
        response => {
            if (!response.user){
              this.status = 'error';              
            } else {
                this.status ="success";
                localStorage.setItem('identity', JSON.stringify(this.user));
                console.log (this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token);
                //subida imagen
                this._uploadService.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
                      .then((result: any) =>{
                        
                            this.user.image = result.image;
                            localStorage.setItem('identity', JSON.stringify(this.user));
                            console.log (this.user);
                            
                      });
                      
            }
        },
        error => {
            var errorMessage = <any>error;
            if (errorMessage != null){
                this.status = 'error';
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
