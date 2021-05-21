const BASE_URL = 'https://restcountries.eu/rest/v2/name/united';

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}${searchQuery}`).then(response => {
    return response.json();
  });
}

export default { fetchCountries };