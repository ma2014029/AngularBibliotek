import { Users } from './../models/users';
import { Component, OnInit } from '@angular/core';
import { UserQueryComponent } from '../user-query/user-query.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  public data : UserQueryComponent = new UserQueryComponent();
  data2: Users = new Users();
  constructor(public router:Router){}
  

  public login(){
    const res = this.data.userArray.find(x => x.nombre === this.data.selectedUser.nombre);
    const res2 = this.data.userArray.find(x => x.password === this.data.selectedUser.password);
    if(res.nombre === 'admin' && res2.password === 'admin'){
      alert('Inicio de Sesión exitoso!!!');
      this.router.navigate(['admin']);
      console.log('Presionar F5...');
    }else if(res.nombre === res2.nombre){
      alert('Inicio de Sesión exitoso!!!');
      this.router.navigate(['user']);
      console.log('Presionar F5...');
    }else if (res != res2){
      this.router.navigate(['alerta']);
      this.data.limpiar();
    }
  }
}
