import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.scss'],
  providers : [UserService]
})
export class KeeperComponent implements OnInit {
      public title:string;
      public keepers : User[];
      public url;

  constructor(
       private _userService : UserService
  ) { 
      this.title = "Cuidadores";
      this.url = GLOBAL.url;
  }


  ngOnInit() {
      this.getKeppers();

  }

  getKeppers(){
    this._userService.getKeepers().subscribe(
      response => {
          if (!response.users){
              
          }else{
              this.keepers = response.users;
          }
      }, error => {
          console.log(<any>error)
      }
    );
  }
}