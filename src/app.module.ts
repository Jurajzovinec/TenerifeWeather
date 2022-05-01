import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherDataFetcherModule } from './weather-data-fetcher/weather-data-fetcher.module';

@Module({
  imports: [WeatherDataFetcherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
