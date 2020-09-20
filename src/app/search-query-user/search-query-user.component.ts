import { ConsultMagazineComponent } from './../consult-magazine/consult-magazine.component';
import { ConsultBookComponent } from './../consult-book/consult-book.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-query-user',
  templateUrl: './search-query-user.component.html',
  styleUrls: ['./search-query-user.component.css']
})
export class SearchQueryUserComponent {
  data: ConsultBookComponent = new ConsultBookComponent();
  data2: ConsultMagazineComponent = new ConsultMagazineComponent();

  buscar(){
    if( this.data.bookArray.filter(x => x.titulo === this.data.selectedBook.titulo)){
      console.log(this.data.selectedBook)
    }
  }
}
