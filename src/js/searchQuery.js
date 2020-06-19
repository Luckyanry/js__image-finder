import debounce from 'lodash.debounce';
import { pageCounter } from './pageCounter';
import { refs } from './refs';

function handleInput(e) {
  e.preventDefault();

  refs.articleWrapper.innerHTML = '';

  const input = e.target.value;
  refs.button.classList.add('btn_hidden');

  pageCounter.resetPage();
  pageCounter.setSearchQuery(input);

  e.target.value = '';
}

refs.input.addEventListener('input', debounce(handleInput, 500));

refs.button.addEventListener('click', () => {
  pageCounter.setSearchQuery(pageCounter.searchQuery);

  // window.scroll({
  //   top: 1000,
  //   behavior: 'smooth',
  // });
});

refs.scrollBtn.addEventListener('click', () => {
  window.scroll({
    top: 100,
    behavior: 'smooth',
  });
});
