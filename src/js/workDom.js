import galleryTpl from '../templates/gallery.hbs';
import { objApiService } from './apiService';
import apiService from './apiService';
import { refs } from './searchQuery';

// export default function makeFetch() {
//   apiService()
//     .then(({ hits }) => {
//       console.log('hits', hits);

//       this.pageNumber += 1;

//       if (hits.length === 0) {
//         this.pageNumber -= 1;
//         return console.log('Uppsss');
//       }

//       const murkup = galleryTpl(hits);
//       refs.articleWrapper.insertAdjacentHTML('beforeend', murkup);
//     })
//     .catch(error => console.warn(error));
// }
