import { ConsultMagazineComponent } from './../consult-magazine/consult-magazine.component';
import { ConsultBookComponent } from './../consult-book/consult-book.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent {
  
  data: ConsultBookComponent = new ConsultBookComponent();
  data2: ConsultMagazineComponent = new ConsultMagazineComponent();

  buscarT(){
    if(this.data.selectedBook.titulo !== ' '){
      if(this.data.bookArray.find(x => x.titulo === this.data.selectedBook.titulo)){
        const cont = this.data.bookArray.find(x => x.titulo === this.data.selectedBook.titulo);
        this.data.limpiar();
        return cont;
      }else{
        this.data.limpiar();
        alert('Ninguna Coincidencia');
      }
    }

  }
}
