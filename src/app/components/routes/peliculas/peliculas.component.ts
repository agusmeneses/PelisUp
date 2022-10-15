import { Component, OnInit } from '@angular/core';
import moviesMock from "../../../mocks/movies.mock.json"
import { IMovie } from 'src/app/interfaces/movies.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  movies: IMovie[]=[]
  filteredmovies: IMovie[]=[]
  filter: string="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
