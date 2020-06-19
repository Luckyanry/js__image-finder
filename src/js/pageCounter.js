import apiService from './apiService';
import updateMurkup from './updateMarkup';

const pageCounter = {
  pageNumber: 1,
  searchQuery: '',

  setSearchQuery(input) {
    this.searchQuery = input;

    apiService()
      .then(hits => {
        updateMurkup(hits);
        this.incrementPage();
      })
      .catch(error => console.warn(error));
  },

  incrementPage() {
    this.pageNumber += 1;
  },

  resetPage() {
    this.pageNumber = 1;
  },
};

export { pageCounter };
