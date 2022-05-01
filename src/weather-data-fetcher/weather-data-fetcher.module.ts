import { Module } from '@nestjs/common';
import { WeatherDataFetcherService } from './weather-data-fetcher.service';
import { WeatherDataFetcherController } from './weather-data-fetcher.controller';

@Module({
  providers: [WeatherDataFetcherService],
  controllers: [WeatherDataFetcherController],
})
export class WeatherDataFetcherModule {}
