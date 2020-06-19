import debounce from 'lodash.debounce';
import { pageCounter } from './pageCounter';
import { refs } from './refs';

function handleInput(e) {
  e.preventDefault();

  refs.articleWrapper.innerHTML = '';

  let input = e.target.value;

  pageCounter.resetPage();
  pageCounter.setSearchQuery(input);

  e.target.value = '';
}

refs.input.addEventListener('input', debounce(handleInput, 600));

refs.button.addEventListener('click', () => {
  pageCounter.setSearchQuery(pageCounter.searchQuery);
});
