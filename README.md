# Chartdemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

* Added "chart.js": "^2.7.1" in package.json file under dependencies category

* Added "rxjs-compat": "^6.2.1" in package.json file under dependencies category for rxjs.

  This will be used in weather.service.ts

  ```
  import 'rxjs/add/operator/map';

  dailyForecast(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=6771277280deaf62e50698489d9b4dbf")
      .map(result => result);
  }
  ```
* Used https://openweathermap.org external api for showing forecast weather.

* import chart.js in app.component file and marked the dimensions from the external api.

```
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
```

* Refer this site for https://www.chartjs.org/ chart documentation.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Output
[!(chartdemo_output.png)](chartdemo_output.png)
