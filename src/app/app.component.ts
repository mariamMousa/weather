import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherForm!: FormGroup;

  ngOnInit() {
    this.weatherForm = new FormGroup({
      areaName: new FormControl(),
    });
  }
  title = 'weaterApp';
  weather: any;
  summary!: string;
  temp!: number;
  tempMax!: number;
  tempMin!: number;
  windS!: number;
  windD!: number;
  feelslike!: number;
  humidity!: number;
  pressure!: number;
  seaL!: number;
  grndL!: number;
  iconUrl!: string;
  name!: string;
  country!: string;
  areaName: string = '';

  constructor(private weatherSer: WeatherService) {}
  onSubmit() {
    console.log('Area name: ' + this.weatherForm.value.areaName);
    this.weatherSer.getWeather(this.weatherForm.value.areaName).subscribe({
      next: (res) => {
        console.log(res);
        this.weather = res;
        this.name = this.weather.name;
        this.country = this.weather.sys.country;
        this.summary = this.weather.weather[0].main;
        this.temp = this.weather.main.temp;
        this.tempMax = this.weather.main.temp_max;
        this.tempMin = this.weather.main.temp_min;
        this.windS = this.weather.wind.speed;
        this.windD = this.weather.wind.deg;
        this.feelslike = this.weather.main.feels_like;
        this.humidity = this.weather.main.humidity;
        this.pressure = this.weather.main.pressure;
        this.seaL = this.weather.main.sea_level;
        this.grndL = this.weather.main.grnd_level;
        this.iconUrl =
          'https://openweathermap.org/img/wn/' +
          this.weather.weather[0].icon +
          '@2x.png';
      },
    });
  }
}
