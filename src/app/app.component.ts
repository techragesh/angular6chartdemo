import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  minTemp : any;
  maxTemp: any;
  data: any;
  dt: any;
  chart = [];
  weatherDates: any[];
  constructor(private _weather: WeatherService){}

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        //console.log(JSON.stringify(res));
        this.maxTemp = res['list'].map(res => res.main.temp_max)
        this.minTemp = res['list'].map(res => res.main.temp_min)
        this.dt = res['list'].map(res => res.dt)
        let weatherDates = []
        this.dt.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        })

       
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: this.maxTemp,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: this.minTemp,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      })
  }
}
