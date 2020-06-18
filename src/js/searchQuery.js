import debounce from 'lodash.debounce';
import { pageCounter } from './updateMarkup';
import { refs } from './refs';

function handleInput(e) {
  e.preventDefault();

  refs.articleWrapper.innerHTML = '';

  const input = e.target.value;

  pageCounter.setSearchQuery(input);

  if (input === '') {
    pageCounter.resetPage();
  }
}

refs.input.addEventListener('input', debounce(handleInput, 500));
