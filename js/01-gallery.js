import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// находим div галлереи
const galleryEl = document.querySelector("div.gallery");
console.log(galleryEl);

// создаем в памяти список изображений с атрибутами, полученные из galleryItems
const listEl = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

//   Вводим галлерею на страницу
galleryEl.insertAdjacentHTML("afterbegin", listEl);

galleryEl.addEventListener("click", onGetLargeImage);

function onGetLargeImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const currentImageUrl = event.target.dataset.source;
  openModal(currentImageUrl);
}
function openModal(currentImageUrl) {
  const modalFromLib = basicLightbox.create(
    `
      <img
      class="modal__image"
      src="${currentImageUrl}"
          />
`
  );

  modalFromLib.show();
}
