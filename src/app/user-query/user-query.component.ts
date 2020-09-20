import { Router, RouterEvent } from '@angular/router';
import { NavigationBarComponent } from './../navigation-bar/navigation-bar.component';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent {

  public userArray: Users[] = [
    {id:1, cui:null, nombre:'admin', apellido:null, rol:'admin', password:'admin', userL:1},
    {id:2, cui:'2020753', nombre:'Cristian', apellido:'Morales', rol:'catedrático', password:'132456', userL:2},
    {id:3, cui:'2020852', nombre:'David', apellido:'Gutierres', rol:'alumno', password:'132456', userL:3},
    {id:4, cui:'2020741', nombre:'Emmanuel', apellido:'Cante', rol:'catedrático', password:'132456', userL:4},
    {id:5, cui:'2020963', nombre:'Diego', apellido:'Pacheco', rol:'alumno', password:'132456', userL:5}
  ];

  selectedUser: Users = new Users();

  add(){
      if(this.userArray.find(x => x.cui === this.selectedUser.cui)){
        alert('El carnet o CUI ya existe');
        this.selectedUser = {'id':null,'cui':null, nombre:'', apellido:'', rol:'', password:'', userL:null};
      }else{
        this.selectedUser.id = this.userArray.length + 1;
        this.userArray.push(this.selectedUser);
        alert('Usuario creado con éxito');
        this.selectedUser = {'id':null,'cui':null, nombre:'', apellido:'', rol:'', password:'', userL:null};
      }
    }
  update(){
    if(this.selectedUser.id === 0){  
      this.selectedUser.id = this.userArray.length + 1;
      this.userArray.push(this.selectedUser);
      alert('Usuario creado con éxito');
      this.selectedUser = {'id':null,'cui':null, nombre:'', apellido:'', rol:'', password:'', userL:null};
    }
  }

  openEdit(user:Users){
    this.selectedUser = user;
  }

  delete(){
    if(confirm('Desea eliminarlo')){
      this.userArray = this.userArray.filter(x => x != this.selectedUser);
      this.selectedUser = new Users();
    }
  }

  limpiar(){
    this.selectedUser = {'id':null, 'cui':null, nombre:'', apellido:'', rol:'', password:'', userL:null};
  }

}
