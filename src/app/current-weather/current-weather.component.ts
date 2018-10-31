import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather/weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bethesda', 'US')
      .subscribe(res =>
        this.current = res)
  }
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
