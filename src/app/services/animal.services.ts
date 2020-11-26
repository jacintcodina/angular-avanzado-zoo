import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class AnimalService{
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

  
    addAnimal (token, animal): Observable<any>{
        let params = JSON.stringify(animal);
        let httpHeaders = new HttpHeaders({'Content-Type':'application/json',
                                            'Authorization':token
                                          });
        let options = { headers: httpHeaders };
        return this._http.post(this.url+'animal', params, options); 
    }
  
    getAnimals(): Observable<any>{        
        return this._http.get(this.url+'animals'); 
    }
  
  
    getAnimal(id): Observable<any>{        
        return this._http.get(this.url+'animal/'+id); 
    }

    editAnimal(token, id, animal): Observable<any>{
        let params = JSON.stringify(animal);
        let httpHeaders = new HttpHeaders({'Content-Type':'application/json',
                                            'Authorization':token
                                          });
        let options = { headers: httpHeaders };
        return this._http.put(this.url+'animal/'+id,  params, options); 

    }

    deleteAnimal(token, id): Observable<any>{
        
        let httpHeaders = new HttpHeaders({'Content-Type':'application/json',
                                            'Authorization':token
                                          });
        let options = { headers: httpHeaders };    
        return this._http.delete(this.url+'animal/'+id, options); 

    }
  
}
        
    