import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieSeriesService } from '../services/movies-series.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  id!: string | null;
  movieSeries$!: Observable<any>;
  type!: string | null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private moviesSeriesService: MovieSeriesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.getBody();
  }

  goBackNow() {
    this.location.back();
  }

  getBody() {
    this.movieSeries$ =
      this.type == 'M'
        ? this.moviesSeriesService.getMovieById(this.id)
        : this.moviesSeriesService.getSeriesById(this.id);
  }
}
