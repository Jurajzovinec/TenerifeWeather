import { IsDefined, IsNumber, IsString } from 'class-validator';

export class WeatherData {
  @IsNumber()
  @IsDefined()
  public readonly temp: number;

  @IsNumber()
  @IsDefined()
  public readonly feelsLike: number;

  @IsString()
  @IsDefined()
  public readonly description: string;
}
