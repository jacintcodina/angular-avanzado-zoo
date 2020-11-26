import { isNgTemplate } from '@angular/compiler';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name : 'search'
})

@Injectable()

export class SearchPipe implements PipeTransform {
    transform (items:any, term:any) :  any {
        if(term == undefined){ //si el texte de buscqueda esta buit retorna tot
            return items;
        }
        // si existeix filtra per javascript busca en el nom el terme de busqueda
        return items.filter(function(item){
                return item.name.toLowerCase().includes(term.toLowerCase());

        });
    }
}