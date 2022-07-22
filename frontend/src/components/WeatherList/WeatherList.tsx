import Weather from "../../models/weather";
import { WeatherRow } from "../WeatherRow/WeatherRow";

export interface WeathersProps {
  data: Weather[];
}

export function WeatherList({ data }: WeathersProps) {
  return (
    <div>
      {data.map((weather) => (
        <WeatherRow data={weather} key={weather.date} />
      ))}
    </div>
  );
}

export default WeatherList;
