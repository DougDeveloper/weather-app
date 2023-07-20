import { WeatherDatas } from './../../../../models/interfaces/weather.interface';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Brasília';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getweatherDatas(cityName)
      .subscribe({
        next: (response) => {
          // verificando: se o response é defined (possui dados), podemos atribuir valores
          response && (this.weatherDatas = response);
        },
        error: (error) => console.log(error)
    })
  }
}
