import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series: Array<Serie> = [];
  public average: number = 0;

  constructor(private seriesService: SeriesService) { }

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.average = this.getAverage();
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  getAverage(): number {
    let total: number = 0;
    this.series.forEach((serie) => total+= serie.seasons);
    let average: number = total/this.series.length;
    return average;
  }

}
