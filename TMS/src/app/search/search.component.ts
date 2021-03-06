import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loading.service';
import { MovieSeriesService } from '../services/movies-series.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  imgUrl: any;
  type: any;
  movies$!: Observable<any>;
  series$!: Observable<any>;
  searchWord: string = '';

  constructor(
    public moviesSeriesService: MovieSeriesService, public loaderSevice: LoaderService, private changeDetectorRef: ChangeDetectorRef) {
      
    }

  ngOnInit(): void {
    this.getMovieBody();
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  search() {
    this.searchIf();
  }

  searchIf() {
    if (this.searchWord?.length > 3) {
      this.searchBrain('M');
      this.searchBrain('S');
    } else if (this.searchWord?.length < 1) {
      this.getMovieBody();
      this.getSeriesBody();
    }
    this.changeDetectorRef.detectChanges();
  }

  getMovieBody() {
    this.movies$ = this.moviesSeriesService.getTopMovies();
  }

  getSeriesBody() {
    this.series$ = this.moviesSeriesService.getTopSeries();
  }

  onTabClick(e: any) {
    switch (e.index) {
      case 0: {
        this.getMovieBody();
        this.searchBrain('M');
        break;
      }
      case 1: {
        this.getSeriesBody();
        this.searchBrain('S');
        break;
      }
      default: {
        break;
      }
    }
    this.changeDetectorRef.detectChanges();
  }

  searchBrain(type: any) {
    if (this.searchWord?.length !== 0) {
      if (type == 'M') {
        this.movies$ = this.moviesSeriesService.searchMovies(this.searchWord);
      } else if (type == 'S') {
        this.series$ = this.moviesSeriesService.searchSeries(this.searchWord);
      }
    }
  }
}
