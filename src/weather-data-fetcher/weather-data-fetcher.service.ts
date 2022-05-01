import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { WeatherData } from './dto/whether-data.output';

@Injectable()
export class WeatherDataFetcherService {
  private readonly losCristianosOptions = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: 'Los Cristianos,es',
      lat: '0',
      lon: '0',
      callback: 'test',
      id: '2172797',
      lang: 'null',
      units: 'metric',
      mode: 'xml',
    },
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': '579c4181f2msh932f67b76bc40aap156664jsn33a26b825339',
    },
  };

  private parseToObject(res: AxiosResponse): Promise<Record<string, unknown>> {
    const splittingString = `"weather"`;
    const splitIt = res.data.split(splittingString);
    return JSON.parse(`{${splittingString}${splitIt[1].slice(0, -1)}`);
  }

  private async processToWeatherData(res: AxiosResponse): Promise<WeatherData> {
    const parsed = this.parseToObject(res);

    const weatherData = plainToClass(WeatherData, {
      description: (parsed as any).weather[0]?.description,
      feelsLike: (parsed as any).main?.feels_like,
      temp: (parsed as any).main?.temp,
    } as WeatherData);

    const errors = await validate(weatherData);

    if (errors.length > 0) {
      throw new InternalServerErrorException('Oos');
    }

    return weatherData;
  }

  public async getWeatherData(): Promise<WeatherData> {
    try {
      const res = await axios(this.losCristianosOptions);
      const processed = await this.processToWeatherData(res);
      return processed;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException(err);
    }
  }
}
