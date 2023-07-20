import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '6aa2d035595cf541be13fbc628ee0e69';

  constructor(private http: HttpClient) {}

  getweatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?=q${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
