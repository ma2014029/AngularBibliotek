import { Magazine } from './../models/magazines';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-magazine',
  templateUrl: './consult-magazine.component.html',
  styleUrls: ['./consult-magazine.component.css']
})

export class ConsultMagazineComponent {

  magaArray: Magazine[] = [
    {id:1, autor:'Pavlish C.', titulo:'Human Rights Barrier for Displaced Persons in Southern Sudan', edicion:'1ra', descripcion:'Trata sobre los derechos humanos que erroneamente se aplican segun donde uno viva.', frecuencia_Actual:'trimestral', ejemplares: 20, temas:'Derechos, Sudan, Personas', palabrasClave:'humanidad, derechos, politica, Sudan, barreras sociales', copias:100, disponibles: 100,numPrestamo: 25},
    {id:2, autor:'Ibañez B', titulo:'Factores Psicológicos de la pobreza', edicion:'2da', descripcion:'Breve descripcion sobre los efectos negativos desde el punto psicologico que causa la pobreza', frecuencia_Actual:'anual', ejemplares: 185, temas:'Economia, Psicologia, Pobreza', palabrasClave:'Dinero, Psicologia, Economia', copias:50, disponibles: 50, numPrestamo: 15},
    {id:3, autor:'Gonzales', titulo:'Historias del mundo', edicion:'8va', descripcion:'Nuevos descubrimientos e investigaciones sobre la cultura egipcia', frecuencia_Actual:'Trimestral', ejemplares: 200, temas:'Historia, Egipto, Descubrimientos', palabrasClave:'investigaciones, cultura, pirámides', copias:280, disponibles: 50, numPrestamo: 40},
    {id:4, autor:'Gonzales', titulo:'Especial de Historia Maya', edicion:'4ta', descripcion:'Investigadores realizan hallazgo de una mujer de la realeza Maya.', frecuencia_Actual:'Bimesrtal', ejemplares: 250, temas:'Cultura Maya, Descubrimientos, Historia', palabrasClave:'mayas, hallazgo, investigadores, arqueologos', copias:100, disponibles: 100, numPrestamo: 40}
  ];

  selectedMagazine: Magazine = new Magazine();

  add(){
    if(this.selectedMagazine.id === 0){
      if( this.magaArray.find(x => x.titulo === this.selectedMagazine.titulo)){
        alert('El titulo ya existe');
        this.limpiar();
      }else{
        alert('Libro creado con éxito');
        this.selectedMagazine.id = this.magaArray.length + 1;
        this.magaArray.push(this.selectedMagazine);
      }
    }
    this.selectedMagazine = {id: null, autor: '', titulo: '', edicion: '', descripcion: '', frecuencia_Actual: '', ejemplares: null, temas: '', palabrasClave: '', copias: null, disponibles: null, numPrestamo: null}
  }

  openEdit(maga:Magazine){
    this.selectedMagazine = maga;
  }

  delete(){
    if(confirm('Desea eliminarlo')){
      this.magaArray = this.magaArray.filter(x => x != this.selectedMagazine);
      this.selectedMagazine = new Magazine();
    }
  }

  limpiar(){
    this.selectedMagazine = {id: null, autor: '', titulo: '', edicion: '', descripcion: '', frecuencia_Actual: '', ejemplares: null, temas: '', palabrasClave: '', copias: null, disponibles: null, numPrestamo: null}
  }

}
