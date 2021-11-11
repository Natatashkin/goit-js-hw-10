import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countryTpl from '../templates/countryTpl.hbs';
import getRefs from './refs';

const { countryList, countryInfo } = getRefs();

export function renderMarkup(countries) {
  clearCountriesList();
  clearCountry();

  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  if (countries.length >= 2 && countries.length < 10) {
    renderCountriesList(countries);
    return;
  }
  showCountryInfo(countries);
}

function renderCountriesList(countries) {
  const template = countries
    .map(
      ({ flags, name }) => `<li class="country-item">
        <img  class="country-flag" src=${flags.svg} alt="" width="30" height="30">
        <span class="country-name">${name.official}</span>
    </li>`,
    )
    .join('');

  countryList.innerHTML = template;
}

export function showCountryInfo(data) {
  countryInfo.innerHTML = countryTpl(data);
}

export function clearCountriesList() {
  countryList.innerHTML = '';
}

export function clearCountry() {
  countryInfo.innerHTML = '';
}
