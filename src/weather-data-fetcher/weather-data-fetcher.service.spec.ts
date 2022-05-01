import { Test, TestingModule } from '@nestjs/testing';
import { WeatherDataFetcherService } from './weather-data-fetcher.service';

describe('WeatherDataFetcherService', () => {
  let service: WeatherDataFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherDataFetcherService],
    }).compile();

    service = module.get<WeatherDataFetcherService>(WeatherDataFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
