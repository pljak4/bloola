import { Component } from '@angular/core';
import { MovieSeriesService } from './services/movies-series.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMS';

  constructor(private moviesService: MovieSeriesService){
    
  }

  ngOnInit(){
  }
}
