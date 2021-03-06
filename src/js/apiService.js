import { pageCounter } from './pageCounter';

const apiKey = 'key=17099288-437936b9b4e8db26f206878a3';
const pixabayURL = 'https://pixabay.com/api/';

function apiService() {
  return fetch(
    pixabayURL +
      `?image_type=photo&orientation=horizontal&q=${pageCounter.searchQuery}&page=${pageCounter.pageNumber}&per_page=12&` +
      apiKey,
  )
    .then(res => {
      console.log('Page: ', pageCounter.pageNumber);
      return res.json();
    })
    .then(({ hits }) => hits)
    .catch(error => console.warn(error));
}

export default apiService;
