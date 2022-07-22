import Weather from "../../models/weather";
import styles from "./WeatherRow.module.scss";

export interface WeatherProps {
  data: Weather;
}

export function WeatherRow({ data }: WeatherProps) {
  return (
    <div className={styles.row}>
      <span>{new Date(data.date * 1000).toLocaleDateString("en-US")}</span>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
      />
      <span>{data.description}</span>
      <span>{`${data.temperature} °`}</span>
    </div>
  );
}
