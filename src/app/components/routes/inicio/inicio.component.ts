import { Component, OnInit } from '@angular/core';


//Aca importamos
import moviesMock from "../../../mocks/movies.mock.json"

import { IMovie } from 'src/app/interfaces/movies.interfaces';

import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit {

  //Exportar (con esto le decimes que la variable movies va a tener un arreglo de peliculas y se inicializa en cero)

  movies: IMovie[]=[]
  filteredmovies: IMovie[]=[]
  filter: string="";
  status: boolean = true;
  status1: boolean = false;
  status2: boolean = false;

  constructor() { }

  ngOnInit(): void {

    //mostrar
    //console.log(moviesMock);

    //Entra en movies.mock.json y asigna "movies" a this.movies | En el futuro esto vendra de una API
    this.movies = moviesMock.movies;
    this.filteredmovies = this.movies;
  }
  todos_filter(): void {
    this.filteredmovies= this.movies
    this.status = true;
    this.status1 = false;
    this.status2 = false;
  }
  peliculas_filter(): void {
    this.filteredmovies= this.movies.filter((obj) => {return obj.title})
    this.status1 = true;
    this.status2 = false;
    this.status = false;
    
  }
  series_filter(): void {
    this.filteredmovies= this.movies.filter((obj) => {return obj.name})
    this.status2 = true;
    this.status = false;
    this.status1 = false;
  }

}
