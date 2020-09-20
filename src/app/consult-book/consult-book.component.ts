import { Book } from './../models/books';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-book',
  templateUrl: './consult-book.component.html',
  styleUrls: ['./consult-book.component.css']
})
export class ConsultBookComponent {

  constructor(){}

  public bookArray: Book[] = [
    {id: 1, autor: 'Harrsch C', titulo: 'El psicólogo', edicion: 'Alhambra', palabrasClave: 'Funcion, ciencia, psicología', descripcion: 'Nos da una completa descripcón sobre la mente y como la psicología la estudia', temas: 'ciencia, medicina, psicología', copias: 20, disponibles: 20, numPrestamo: 50},
    {id: 2, autor: 'Seltiz C', titulo: 'Métodos de investigación', edicion: '8a', palabrasClave: 'relaciones sociales, investigación, métodos', descripcion: 'Entender el comportamiento de las personas en diferentes interacciones sociales', temas: 'investigación, métodos, comportamiento, sociedad, humanos, ciencia', copias: 30, disponibles: 30,numPrestamo: 25},
    {id: 3, autor: 'John Kennedy', titulo: 'La conjura de los necios,', edicion: '3ra', palabrasClave: 'necios, sabios, actitud', descripcion: 'Entender el comportamiento de las personas con conportamiento revelde', temas: 'investigación, métodos, comportamiento, sociedad, humanos', copias: 27, disponibles: 27,numPrestamo: 10},
    {id: 4, autor: 'GALTUNG', titulo: 'Teoría y métodos de investigación social', edicion: '2da', palabrasClave: 'relaciones sociales, investigación, métodos', descripcion: 'Entender las formas en las que nos relacionamos', temas: 'comportamiento, sociedad, humanos', copias: 40, disponibles: 40,numPrestamo: 20}
    
  ];

  selectedBook: Book = new Book();

  add(){
    if(this.selectedBook.id === 0){
      if(this.bookArray.find(x => x.titulo === this.selectedBook.titulo)){
        alert('El titulo ya existe');
        this.limpiar();
      }else{
        alert('Libro creado con éxito');
        this.selectedBook.id = this.bookArray.length + 1;
        this.bookArray.push(this.selectedBook);
      }
    }
    this.selectedBook = {id: null, autor: '', titulo: '', edicion: '', palabrasClave: '', descripcion: '', temas: '', copias: null, disponibles: null, numPrestamo: null}
  }

  openEdit(book:Book){
    this.selectedBook = book;
  }

  delete(){
    if(confirm('Desea eliminarlo')){
      this.bookArray = this.bookArray.filter(x => x != this.selectedBook);
      this.selectedBook = new Book();
    }
  }

  limpiar(){
    this.selectedBook = {id: null, autor: '', titulo: '', edicion: '', palabrasClave: '', descripcion: '', temas: '', copias: null, disponibles: null, numPrestamo: null}
  }

}
