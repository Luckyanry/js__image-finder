import galleryTpl from '../templates/gallery.hbs';
import { refs } from './searchQuery';

const apiKey = 'key=17099288-437936b9b4e8db26f206878a3';
const pixabayURL = 'https://pixabay.com/api/';

export const objApiService = {
  pageNumber: 1,
  findWord: '',

  apiService() {
    return fetch(
      pixabayURL +
        `?image_type=photo&orientation=horizontal&q=${this.findWord}&page=${this.pageNumber}&per_page=12&` +
        apiKey,
    )
      .then(res => {
        // if (res.hits.length === 0) return;
        console.log('res', res);

        this.pageNumber += 1;

        console.log('this.pageNumber', this.pageNumber);
        return res.json();
      })
      .then(({ hits }) => {
        console.log('hits', hits);
        if (hits.length === 0) return console.log('Uppsss');

        const murkup = galleryTpl(hits);
        refs.articleWrapper.insertAdjacentHTML('beforeend', murkup);
      })
      .catch(error => console.warn(error));
  },

  setSearchQuery(searchQuery) {
    console.log('searchQuery', searchQuery);

    this.findWord = searchQuery;
    this.apiService();
  },

  resetPage() {
    this.pageNumber = 1;
  },
};
