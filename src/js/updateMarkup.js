import galleryTpl from '../templates/gallery.hbs';
import { refs } from './refs';

function updateMurkup(hits) {
  const murkup = galleryTpl(hits);
  refs.articleWrapper.insertAdjacentHTML('beforeend', murkup);
}

export default updateMurkup;
