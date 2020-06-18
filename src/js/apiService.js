import galleryTpl from '../templates/gallery.hbs';
import { refs } from './searchQuery';
import makeFetch from './workDom';

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
        console.log('this.pageNumber', this.pageNumber);

        return res.json();
      })
      .then(({ hits }) => {
        console.log('hits', hits);

        this.pageNumber += 1;

        if (hits.length === 0) {
          this.pageNumber -= 1;
          return console.log('Uppsss');
        }

        const murkup = galleryTpl(hits);
        refs.articleWrapper.insertAdjacentHTML('beforeend', murkup);
      })
      .catch(error => console.warn(error));
  },

  setSearchQuery(searchQuery) {
    this.findWord = searchQuery;
    this.apiService();
  },

  resetPage() {
    this.pageNumber = 1;
  },
};
