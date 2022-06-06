import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loading.service';
import { MovieSeriesService } from '../services/movies-series.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public imgUrl: any;
  public type: any;
  public movie: any;
  public series: any;
  public searchWord: any;

  constructor(public moviesSeriesService: MovieSeriesService, public loaderSevice: LoaderService) { }

  ngOnInit(): void {
    
    this.getMovieBody();
  }

  search(e: any) {
    this.searchIf();
  }

  searchIf(){
    if(this.searchWord?.length>3){
      this.searchBrain('M');
      this.searchBrain('S');
    }else if(this.searchWord?.length<1){
      this.getMovieBody();
      this.getSeriesBody();
    }
  }

  getMovieBody(){
    this.moviesSeriesService.getTopMovies()
    .subscribe((res: any) => {
      this.movie = res.results;
    })
  }

  getSeriesBody(){
    this.moviesSeriesService.getTopSeries()
    .subscribe((res: any) => {
      this.series = res.results;
    })
  }

  onTabClick(e: any){
    switch (e.index) {
      case 0: {
        let m='M';
        this.getMovieBody();
        this.searchBrain(m);
        break; 
      }
      case 1: {
        let s='S';
        this.getSeriesBody();
        this.searchBrain(s);
        break;
      }
      default:{
        break;
      }   
    }
  }

  searchBrain(type: any){
    debugger;
    if(type=='M' && this.searchWord.length!=0){
      this.moviesSeriesService.searchMovies(this.searchWord)
        .subscribe((res: any) => {
          this.movie=res.results;
        });
    }else if(type=='S' && this.searchWord.length!=0){
      this.moviesSeriesService.searchSeries(this.searchWord)
        .subscribe((res: any) => {
          this.series=res.results;
        });
    }
    
  }

}
