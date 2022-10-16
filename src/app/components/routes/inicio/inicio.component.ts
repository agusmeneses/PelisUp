import { Component, OnInit } from '@angular/core';

//Aca importamos
import moviesMock from "../../../mocks/movies.mock.json"
 
import { IMovie } from 'src/app/interfaces/movies.interfaces';
 
import { Pipe, PipeTransform } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';
 
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
 
export class InicioComponent implements OnInit {
 
  //Exportar (con esto le decimes que la variable movies va a tener un arreglo de peliculas y se inicializa en cero)
 
  movieSeriesOrigRow: IMovie[]=[];
  movieSeriesRow: IMovie[]=[];
  movieSeriesRow2: IMovie[]=[];
  toSearch: string="";
  filter: string="";

  //Url para obtener imagenes
  urlImage: string= 'https://image.tmdb.org/t/p/w500';
  
  constructor(public _moviesService: MoviesService) { }
 
  ngOnInit(): void {
 
    //Entra en movies.mock.json y asigna "movies" a this.movies | En el futuro esto vendra de una API
    //this.movieSeriesOrigRow = moviesMock.movies;
    //this.movieSeriesRow = moviesMock.movies;
    //this.movieSeriesRow2 = moviesMock.movies;

    this.filter="Todos"

    this._moviesService.getTrending(1).subscribe(
      (response: any) => {
        console.log("Success",response);
        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
        this.movieSeriesRow2 = response.results
      },
      error => {
        console.log("Error",error);
      }
    )
  }
    changeFilter(movieType:string){
      this.filter = movieType;
    }
    search(arg:any){
      this.movieSeriesRow = this.movieSeriesOrigRow.filter((obj) => {
        if (obj.title?.includes(this.toSearch.toLowerCase())){
          return obj.title?.toLowerCase().includes(this.toSearch);
        }
        else{
          return obj.name?.toLowerCase().includes(this.toSearch.toLowerCase());
        };
    });
    }
 
}
