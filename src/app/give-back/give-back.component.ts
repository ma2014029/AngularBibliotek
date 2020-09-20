import { ConsultMagazineComponent } from './../consult-magazine/consult-magazine.component';
import { ConsultBookComponent } from './../consult-book/consult-book.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-back',
  templateUrl: './give-back.component.html',
  styleUrls: ['./give-back.component.css']
})
export class GiveBackComponent {

  data: ConsultBookComponent = new ConsultBookComponent();
  data2: ConsultMagazineComponent = new ConsultMagazineComponent();

  devolver(){
    alert('Libro Devuelto!!!')
  }

}
