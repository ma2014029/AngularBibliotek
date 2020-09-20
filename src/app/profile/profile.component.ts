import { Users } from './../models/users';
import { NavigationBarComponent } from './../navigation-bar/navigation-bar.component';
import { UserQueryComponent } from './../user-query/user-query.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  ngOnInit() {
    this.Bperfil();
  }

  data: UserQueryComponent = new UserQueryComponent();
  data2: Users = new Users();

  selectedUser: Users = new Users();

  Bperfil(){
    
    if(this.data.userArray = this.data.userArray.filter(x => x.id === x.userL)){
      console.log(this.data.userArray)
    }
  }
}
