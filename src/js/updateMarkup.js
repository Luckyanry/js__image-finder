import galleryTpl from '../templates/gallery.hbs';
import { refs } from './refs';

function updateMurkup(hits) {
  const murkup = galleryTpl(hits);
  refs.articleWrapper.insertAdjacentHTML('beforeend', murkup);
  refs.button.classList.remove('btn_hidden');
}

export default updateMurkup;
