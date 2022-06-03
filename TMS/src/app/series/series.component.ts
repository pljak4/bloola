import { Component, OnInit } from '@angular/core';
import { MovieSeriesService } from '../services/movies-series.service';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public series: any;
  public type='S';
  
  constructor(public moviesSeriesService: MovieSeriesService) { }

  ngOnInit(): void {
    this.getBody();
  }

  getBody(){
    this.moviesSeriesService.getTopSeries()
    .subscribe((res: any) => {
      this.series = res.results;
    })
  }

}
