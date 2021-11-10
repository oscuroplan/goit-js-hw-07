// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

// // находим div галлереи
// const galleryEl = document.querySelector("div.gallery");
// console.log(galleryEl);

// // создаем в памяти список изображений с атрибутами, полученные из galleryItems
// const listEl = galleryItems
//   .map(
//     ({ preview, original, description }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//   )
//   .join("");

// //   Вводим галлерею на страницу
// galleryEl.insertAdjacentHTML("afterbegin", listEl);

// galleryEl.addEventListener("click", onGetLargeImage);

// function onGetLargeImage(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }
//   const currentImageUrl = event.target.dataset.source;
//   openModal(currentImageUrl);
// }
// function openModal(currentImageUrl) {
//   const modalFromLib = basicLightbox.create(
//     `
//     <div class="modal">
//       <img
//       class="modal__image"
//       src="${currentImageUrl}"
//           />
//     </div>
// `
//   );

//   modalFromLib.show();
// }

// // galleryEl.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   if (event.target.className !== "gallery__image") {
// //     return;
// //   }
// //   const srcLink = event.target.getAttribute("data-source");
// //   basicLightbox.create(`<img src="${srcLink}">`).show();
// // });

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const arrayEl = galleryItems
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

galleryEl.insertAdjacentHTML("afterbegin", arrayEl);

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
