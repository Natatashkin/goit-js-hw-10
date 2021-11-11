import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(query) {
  return fetch(
    `https://restcountries.com/v3.1/name/${query}?fields=name,capital,flags,population,languages`,
  )
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
        return new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.err(error));
}
