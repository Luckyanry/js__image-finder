import debounce from 'lodash.debounce';
import { pageCounter } from './pageCounter';
import { refs } from './refs';

refs.input.addEventListener('input', debounce(handleInput, 500));
refs.button.addEventListener('click', loadMoreBtn);
refs.scrollUpBtn.addEventListener('click', scrollUpBtn);

function handleInput(e) {
  e.preventDefault();

  refs.articleWrapper.innerHTML = '';

  const input = e.target.value;
  refs.button.classList.add('btn_hidden');

  pageCounter.resetPage();
  pageCounter.setSearchQuery(input);

  e.target.value = '';
}

function loadMoreBtn() {
  const crossAxis = document.documentElement.offsetHeight - 100;

  setTimeout(() => {
    window.scrollTo({
      top: crossAxis,
    });
  }, 600);

  pageCounter.setSearchQuery(pageCounter.searchQuery);
}

function scrollUpBtn() {
  window.scroll({
    top: 100,
  });
}
