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

}
