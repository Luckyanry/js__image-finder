import galleryTpl from '../templates/gallery.hbs';
import apiService from './apiService';
import { refs } from './refs';

function updateMurkup(hits) {
  const murkup = galleryTpl(hits);
  refs.articleWrapper.insertAdjacentHTML('beforeend', murkup);
}

const pageCounter = {
  pageNumber: 1,
  findWord: '',

  setSearchQuery(input) {
    this.findWord = input;

    apiService().then(hits => {
      updateMurkup(hits);

      this.pageNumber += 1;

      if (hits.length === 0) {
        this.pageNumber -= 1;
        return console.log('Uppsss');
      }
    });
  },

  resetPage() {
    this.pageNumber = 1;
  },
};

export default updateMurkup;
export { pageCounter };
