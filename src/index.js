import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/api';
import getRefs from './js/refs';
import { renderMarkup, clearCountriesList, clearCountry } from './js/render-markup';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const { input } = getRefs();

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const searchQuery = e.target.value.trim();

  if (!searchQuery) {
    clearCountriesList();
    clearCountry();
    return;
  }
  fetchCountries(searchQuery).then(renderMarkup);
}
