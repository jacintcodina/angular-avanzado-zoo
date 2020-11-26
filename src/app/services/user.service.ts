import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(user_to_register): Observable<any>{
        let params = JSON.stringify(user_to_register);
        let httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        let options = { headers: httpHeaders };

        return this._http.post(this.url+'register', params, options); 
    }

    signup (user_to_login, gettoken = null) : Observable<any>{

        if (gettoken != null) {
            user_to_login.gettoken =gettoken;
        };
        
        let params = JSON.stringify(user_to_login);
        let httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        let options = { headers: httpHeaders };
        return this._http.post(this.url+'login', params, options);         
    }

    getIdentity(){
        let identity = JSON.parse (localStorage.getItem('identity'));
                       
    
        if(identity != "undefined"){
            this.identity = identity;
        } else{
            this.identity = null;
        }
        return this.identity;
      }

      getToken(){
        let token = localStorage.getItem('token');
    
        if(token != "undefined"){
            this.token = token;
        } else{
            this.token = null;
        }
        return this.token;
      }

    //modificar passant token  //updateUser que és acreça de API
      upadateUser (user_to_update) : Observable<any> {
          let params = JSON.stringify(user_to_update);
          let httpHeaders = new HttpHeaders({'Content-Type':'application/json',
                                            'Authorization': this.getToken()});
          let options = { headers: httpHeaders };

          return this._http.put(this.url+'update-user/' + user_to_update._id , params, options);                                 
      }

      getKeepers() :  Observable<any>{        
        return this._http.get(this.url+'keepers'); 
        
    }      
    
}
        
    

