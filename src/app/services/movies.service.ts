import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IMovieUser } from "../interfaces/movies.interfaces";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class MoviesService {
    private baseUrl: string = "https://api.themoviedb.org/3";
    private api_key: string = "1e9b089073960d4215fa0d2ebe24f999";

    constructor (private _http: HttpClient) {}

    getTrending(page:number) : Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/trending/all/week?language=es&page=${page}`, {params: params});
    };

    getMovies(page:number): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/movie/popular?language=es&page=${page}`, {params: params});
    };

    getSeries(page:number): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/tv/popular?language=es&page=${page}`, {params: params});
    };

    gettvdetail(tv_id:string): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/tv/${tv_id}?/language=es`, {params: params});
    };
    getmoviedetail(tv_id:string): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/movie/${tv_id}?/language=es`, {params: params});
    };


}