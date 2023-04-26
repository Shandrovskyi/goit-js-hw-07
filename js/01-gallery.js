import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


// Обираємо UL

const galleryUL = document.querySelector(".gallery");

// створюємо Html розмітку
const createGallery = ({preview, original, description}) =>
`<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`;

//  кидаємо в загальну область видимості, для того щоб Escape також бачив цю зміну
   let instance


// додаємо до html
const galleryMarkup = galleryItems
.map(item => createGallery(item))
.join("");
galleryUL.insertAdjacentHTML('beforeend', galleryMarkup);


// робимо так щоб при натисканні відкривалася картинка і  закривалась
galleryUL.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (target.nodeName !== 'IMG') {
      return;
    }

    instance = basicLightbox.create(`<img src="${target.dataset.source}" alt="${target.alt}" />`);
    instance.show();

  });



// Закриваємо через клавішу Escape

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });