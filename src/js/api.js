import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({ fields: 'name,capital,flags,population,languages' });

export function fetchCountries(query) {
  return fetch(`${BASE_URL}${query}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
        return new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.err(error));
}
