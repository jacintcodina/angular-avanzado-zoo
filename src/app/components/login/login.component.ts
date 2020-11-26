import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ProviderAst } from '@angular/compiler';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit {
    public title : string;
    public user : User;
    public identity;
    public token;
    public status:string;

    constructor(
        private _route : ActivatedRoute,
        private _router : Router,
        private _userService : UserService

    ) { 
        this.title = 'Identificate';
        this.user = new User('','','','','','ROLE_USER','');              
    }

  ngOnInit(){
        console.log('Component  login carregat');
       
  }

  onSubmit(){
        //loger usuari y conseguir objeto
        this._userService.signup(this.user).subscribe(
          response => {
              this.identity = response.user;
              if (!this.identity || !this.identity._id) {
                alert ('usuario logeado incorrectamente');
              }else{
                  //mostrar identity
                  this.identity.password='';
                  localStorage.setItem('identity', JSON.stringify(this.identity));
                  //conseguir el tokken
                  this._userService.signup(this.user, 'true').subscribe(
                    response => {
                        this.token = response.token;

                        if (this.token.length <=0 ) {
                          alert ('el token no se ha generado');
                        }else{
                            localStorage.setItem('token', this.token);
                            this.status= 'success';         
                            
                            this._router.navigate(['/home']);
                        }
                    },
                    error => {
                        console.log (response);
                        var erroMessage = <any> error;
                        if (erroMessage != null){
                          this.status= 'error';
                        }
                    }
                  );


              }
          },
          error => {                
                var erroMessage = <any> error;
                if (erroMessage != null){                  
                  this.status= 'error';
                }
          }
        );
  }

 
}
