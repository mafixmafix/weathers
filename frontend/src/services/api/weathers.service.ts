export async function findByCity(city: string) {
  return fetch(
    `http://localhost:3001/weathers/findByCity/${city}`
  ).then((response) => response.json());
}
