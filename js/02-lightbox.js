import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


// Обираємо UL

const galleryUL = document.querySelector(".gallery");




// створюємо Html розмітку
const createGallery = ({preview, original, description}) =>

`
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`



// пушимо нашу HTML розмітку в DOM дерево 

const insertToDom = galleryItems.map(item => (createGallery(item)))
.join("");
galleryUL.insertAdjacentHTML("beforeend", insertToDom) ;





// Добавляюмо підписи до картинок за допомогою бібліотеки

new SimpleLightbox(".gallery a", {
    captions: true, // включаємо підписи до зображень
    captionDelay: 250, // затримка перед показом підпису
    captionsData: "alt", // отримуємо текст підпису з атрибута alt
    captionPosition: "bottom", // встановлюємо позицію підпису
    captionClass: "sl-caption", // задаємо клас для підпису
  });
  