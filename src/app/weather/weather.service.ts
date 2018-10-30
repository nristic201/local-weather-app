import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../interfaces'

interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrentWeather(city: string, country: string) {
    return this.http.get<ICurrentWeather>(
      `${environment.baseUrl}.api.openweathermap.org/data/2.5/weather?` +
      `q=${city},${country}&appid=${environment.appId}`
    )
  }
}
