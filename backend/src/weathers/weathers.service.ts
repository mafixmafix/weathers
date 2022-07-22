import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';

@Injectable()
export class WeathersService {
  constructor(private readonly httpService: HttpService) {}

  async findByCity(city: string): Promise<any> {
    return this.httpService
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f70e0c38fcce8bc07f6cb993b1573f4e`,
      )
      .pipe(
        catchError((error) => {
          throw new HttpException(error.response.data, error.response.status);
        }),
        map((response) => response.data),
        map((response) => {
          return {
            status: response.cod,
            message: 'success',
            data: [
              {
                date: response.dt,
                icon: response.weather[0].icon,
                description: response.weather[0].description,
                temperature: response.main.temp,
              },
            ],
          };
        }),
      );
  }
}
