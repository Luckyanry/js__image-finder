import debounce from 'lodash.debounce';
import { objApiService } from './apiService';

export const refs = {
  articleWrapper: document.querySelector('.gallery'),
  input: document.querySelector('.search-form'),
};

function handleInput(e) {
  e.preventDefault();

  refs.articleWrapper.innerHTML = '';

  const input = e.target.value;

  objApiService.setSearchQuery(input);

  if (input === '') {
    objApiService.resetPage();
  }
}

refs.input.addEventListener('input', debounce(handleInput, 500));
