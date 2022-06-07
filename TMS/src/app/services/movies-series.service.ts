import { ApiStuff } from '../shared/helper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class MovieSeriesService {
  constructor(private httpClient: HttpClient) {}

  getMovieById(id: any) {
    return this.httpClient
      .get(ApiStuff.BASE_URL + '/movie/' + id + '?' + ApiStuff.API_KEY)
      .pipe(
        map((x: any) => {
          return this.mapData(x);
        })
      );
  }

  getSeriesById(id: any) {
    return this.httpClient
      .get(ApiStuff.BASE_URL + '/tv/' + id + '?' + ApiStuff.API_KEY)
      .pipe(
        map((x: any) => {
          return this.mapData(x);
        })
      );
  }

  getTopMovies() {
    return this.get30Results(
      ApiStuff.BASE_URL + '/movie/top_rated?' + ApiStuff.API_KEY
    );
  }

  getTopSeries() {
    return this.get30Results(
      ApiStuff.BASE_URL + '/tv/top_rated?' + ApiStuff.API_KEY
    );
  }

  searchMovies(phrase: string) {
    return this.get30Results(
      ApiStuff.BASE_URL +
        '/search/movie?' +
        ApiStuff.API_KEY +
        '&language=en-US&page=1&include_adult=false&query=' +
        phrase
    );
  }

  searchSeries(phrase: string) {
    return this.get30Results(
      ApiStuff.BASE_URL +
        '/search/tv?' +
        ApiStuff.API_KEY +
        '&language=en-US&page=1&include_adult=false&query=' +
        phrase
    );
  }

  private get30Results = (url: string) => {
    const firstUrl = `${url}&page=1`;
    const secondUrl = `${url}&page=2`;
    return forkJoin([
      this.httpClient.get(firstUrl),
      this.httpClient.get(secondUrl),
    ]).pipe(
      map(([firstRes, secondRes]: any) => [
        firstRes.results,
        secondRes.results,
      ]),
      map(([firstPage, secondPage]) => {
        const secondPageStart = secondPage?.slice(0, 10) || [];
        return (firstPage || []).concat(secondPageStart);
      }),
      map((results: any) => results.map((res: any) => this.mapData(res)))
    );
  };

  private mapData = (movie: any) => {
    let dodaj = 'assets/slika.jpg';

    if (movie.poster_path !== null)
      movie.portrait = ApiStuff.IMG_BASE_URL + movie.poster_path;
    else movie.portrait = dodaj;

    if (movie.backdrop_path !== null)
      movie.landscape = ApiStuff.IMG_BASE_URL + movie.backdrop_path;
    else movie.landscape = dodaj;

    movie.title = movie.original_name || movie.title;

    return movie;
  };
}
