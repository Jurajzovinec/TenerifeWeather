import { Controller, Get } from '@nestjs/common';
import { WeatherData } from './dto/whether-data.output';
import { WeatherDataFetcherService } from './weather-data-fetcher.service';

@Controller('weather-data-fetcher')
export class WeatherDataFetcherController {
  public constructor(private weatherService: WeatherDataFetcherService) {}

  @Get('today')
  public async getWeatherData(): Promise<WeatherData> {
    return this.weatherService.getWeatherData();
  }
}
