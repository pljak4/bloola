import { Component, OnInit } from '@angular/core';
import { MovieSeriesService } from '../services/movies-series.service';
import { ApiStuff } from '../shared/helper';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movie: any;
  public imgUrl: any;
  public type: any;

  constructor(public moviesService: MovieSeriesService) {
    this.type='M';
  }

  ngOnInit(): void {
    this.getBody();
    //console.log(this.movie)
  }

  getBody(){
    this.moviesService.getTopMovies()
    .subscribe((res: any) => {
      this.movie = res.results;
    })
  }

}
