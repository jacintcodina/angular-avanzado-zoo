import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keepers/keepers.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';



const routes: Routes = [
    {path: '', component: TiendaComponent},
    {path: '', redirectTo : 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'keepers', component: KeeperComponent},
    {path: 'parques', component: ParquesComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'animals', component: AnimalsComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: 'animal/:id', component: AnimalDetailComponent},
    
    //,    {path: '**', component: HomeComponent}

    
    

   //path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

