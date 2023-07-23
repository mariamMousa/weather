import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=78665e72613c36f8434de1c1216202f8&units=imperial'
    );
  }
}
