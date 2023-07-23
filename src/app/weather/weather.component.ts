import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  @Input() areaName!: string;
  @Input() summary!: string;
  @Input() temp!: number;
  @Input() tempMax!: number;
  @Input() tempMin!: number;
  @Input() windS!: number;
  @Input() windD!: number;
  @Input() feelslike!: number;
  @Input() humidity!: number;
  @Input() pressure!: number;
  @Input() seaL!: number;
  @Input() grndL!: number;
  @Input() iconUrl!: string;
  @Input() name!: string;
  @Input() country!: string;

  // weather: any;
  // summary!: string;
  // temp!: number;
  // feelslike!: number;
  // humidity!: number;
  // pressure!: number;
  // iconUrl!: string;
  // name!: string;
  // city: string = 'Moscows';
  // constructor(private weatherSer: WeatherService) {}
  // ngOnInit(): void {
  //   this.weatherSer.getWeather(this.city).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.weather = res;
  //       this.name = this.weather.name;
  //       this.summary = this.weather.weather[0].main;
  //       this.temp = this.weather.main.temp;
  //       this.feelslike = this.weather.main.feels_like;
  //       this.humidity = this.weather.main.humidity;
  //       this.pressure = this.weather.main.pressure;
  //       this.iconUrl =
  //         'https://openweathermap.org/img/wn/' +
  //         this.weather.weather[0].icon +
  //         '@2x.png';
  //     },
  //   });
  // }
}
