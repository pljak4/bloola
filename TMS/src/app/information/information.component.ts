import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { MovieSeriesService } from '../services/movies-series.service';

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public id: any;
  public movieSeries: any;
  public backImg:any;
  public type: any;

  constructor(public route: ActivatedRoute, private location: Location, public moviesSeriesService: MovieSeriesService) { 
    this.backImg='assets/slika.jpg'
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.getBody();

    //console.log("ovo je sad: ", this.movieSeries);
  }

  goBackNow(){
    this.location.back();
  }

  getBody(){
    if(this.type == 'M'){
      this.moviesSeriesService.getMovieById(this.id)
        .subscribe((res: any) => {
          this.movieSeries = res;
      })
    }else{
      this.moviesSeriesService.getSeriesById(this.id)
        .subscribe((res: any) => {
          this.movieSeries = res;
      })
    }
    
  }

}
