import { Test, TestingModule } from '@nestjs/testing';
import { WeatherDataFetcherController } from './weather-data-fetcher.controller';

describe('WeatherDataFetcherController', () => {
  let controller: WeatherDataFetcherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherDataFetcherController],
    }).compile();

    controller = module.get<WeatherDataFetcherController>(WeatherDataFetcherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
