import { ApiStuff } from '../shared/helper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()

export class MovieSeriesService {

    constructor(private httpClient: HttpClient){
    }

    getTopMovies(){
        return this.httpClient.get(ApiStuff.BASE_URL+'/movie/top_rated?'+ApiStuff.API_KEY)
        .pipe(map((x: any) => {
            for (let res of x.results) 
                res = this.mapData(res);

            return x;
          }));
    }

    getTopSeries(){
        return this.httpClient.get(ApiStuff.BASE_URL+'/tv/top_rated?'+ApiStuff.API_KEY)
        .pipe(map((x: any) => {
            for (let res of x.results) 
              res = this.mapData(res);
            
            return x;
          }));
    }

    getMovieById(id: any){
        return this.httpClient.get(ApiStuff.BASE_URL+'/movie/'+id+'?'+ApiStuff.API_KEY)
        .pipe(map((x: any) => {
            return this.mapData(x);
          }));
    }

    getSeriesById(id: any){
        return this.httpClient.get(ApiStuff.BASE_URL+'/tv/'+id+'?'+ApiStuff.API_KEY)
        .pipe(map((x: any) => {
            return this.mapData(x);
          }));
    }

    searchMovies(phrase: string){
        return this.httpClient.get(ApiStuff.BASE_URL+'/search/movie?'+ApiStuff.API_KEY+'&language=en-US&page=1&include_adult=false&query='+phrase)
        .pipe(map((x: any) => {
            for(let res of x.results)
                res = this.mapData(res);
            
            return x;
          }));
    }

    searchSeries(phrase: string){
        return this.httpClient.get(ApiStuff.BASE_URL+'/search/tv?'+ApiStuff.API_KEY+'&language=en-US&page=1&include_adult=false&query='+phrase)
        .pipe(map((x: any) => {
            for(let res of x.results)
                res = this.mapData(res);
            
            return x;
          }));
    }
    
    private mapData = (movie: any) => {
        let dodaj='assets/slika.jpg';

        if(movie.poster_path!==null)
            movie.portrait = ApiStuff.IMG_BASE_URL + movie.poster_path;
        else    
            movie.portrait = dodaj;

        if(movie.backdrop_path !== null)
            movie.landscape = ApiStuff.IMG_BASE_URL + movie.backdrop_path;
        else
            movie.landscape=dodaj;

        movie.title = movie.original_name || movie.title;
        
        return movie;
    };

}