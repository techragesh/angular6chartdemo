import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=6771277280deaf62e50698489d9b4dbf
  //http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6771277280deaf62e50698489d9b4dbf
  constructor(private _http: HttpClient) { }

  dailyForecast(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=6771277280deaf62e50698489d9b4dbf")
      .map(result => result);
  }
}