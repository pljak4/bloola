import { Component, OnInit } from '@angular/core';
import { MovieSeriesService } from '../services/movies-series.service';
import { Type } from '../shared/helper'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public searchWord: any;
  searchType: string = Type.MOVIE;

  constructor(public moviesSeriesService: MovieSeriesService) { }

  ngOnInit(): void {
  }

  search(e: any) {
    debugger;
    this.searchWord.next(e.data);
    //this.searchWord.next(e);
  }

  fetchSearchResults() {
    //this.isFetching = true;
    //this.getSearchResults().subscribe((response: any) => {
    //  this.searchResults = response.results;
    //  this.isFetching = false;
    //});
  }

  switchType() {
    switch (this.searchType) {
      case Type.MOVIE: {
        return this.moviesSeriesService.searchMovies(this.searchWord);
      }
      case Type.SERIES: {
        return this.moviesSeriesService.searchMovies(this.searchWord);
      }
      default:{
        return null;
      }
        
    }
  }

}
