import debounce from 'lodash.debounce';
import { objApiService } from './apiService';

export const refs = {
  articleWrapper: document.querySelector('.gallery'),
  input: document.querySelector('#search'),
};

function handleInput(e) {
  e.preventDefault();

  refs.articleWrapper.innerHTML = '';

  const input = e.target.value;

  // objApiService.apiService(input);
  objApiService.setSearchQuery(input);
  // objApiService.resetPage();
}

refs.input.addEventListener('input', debounce(handleInput, 500));
