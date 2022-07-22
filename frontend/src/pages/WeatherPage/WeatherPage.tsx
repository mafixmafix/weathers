import { useState } from "react";
import { Search, WeatherList } from "../../components";
import { findByCity } from "../../services/api/weathers.service";
import { errorNotification } from "../../services/notification.service";
import styles from "./WeatherPage.module.scss";

export function WeatherPage() {
  const [loading, setLoading] = useState(false);
  const [weathers, setWeathers] = useState([]);

  const handleSearch = (search: string) => {
    if (loading) return;
    setLoading(true);
    setWeathers([]);

    findByCity(search)
      .then((response) => {
        if (response.status === 200) {
          setWeathers(response.data);
        } else {
          errorNotification(response.message);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.page}>
      <div>
        <Search onSearch={handleSearch} loading={loading} />
      </div>
      <div>
        <WeatherList data={weathers} />
      </div>
    </div>
  );
}

export default WeatherPage;
