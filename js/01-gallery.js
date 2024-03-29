import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// находим div галлереи
const galleryEl = document.querySelector("div.gallery");
// console.log(galleryEl);

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

galleryEl.addEventListener("click", replacementLinkImg);

// функция замены preview на original
function replacementLinkImg(event) {
  //блокируем действие браузера по умолчанию при клике, переход по ссылке не произойдет
  event.preventDefault();
  // если элемент на который не содержит класс "gallery__image", то выходим из функции, а если есть то продолжаем выполнять основной код
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  // записываем в константу ссылку на оригинальную картинку
  const currentImageUrl = event.target.dataset.source;
  // вызываем функцию открытия модального окна
  onOpenModal(currentImageUrl);
}
// функция открытия модального окна basicLightbox
function onOpenModal(currentImageUrl) {
  const createModal = basicLightbox.create(
    `
      <img
      class="modal__image"
      src="${currentImageUrl}"
          />
`
  );
  createModal.show();
  // включаем слушателя
  window.addEventListener("keydown", escKeyCloseModal);

  // находим модалку
  const modal = document.querySelector("div.basicLightbox");
  // вешаем на нее слушателя кликов для отключения слушателя кликов и кнопок при закрытии по клику
  modal.addEventListener("click", remoweClickModalListner);
}

function escKeyCloseModal(event) {
  // находим модалку
  const modal = document.querySelector("div.basicLightbox");

  // удаляем модалку
  // console.log(event.code);
  if (event.code === "Escape") {
    modal.remove();
    // отключаем слушателя
    window.removeEventListener("keydown", escKeyCloseModal);
    // console.log(modal);
  }
}

// отключаем всех слушателей после закрытия модалки по клику
function remoweClickModalListner() {
  window.removeEventListener("click", remoweClickModalListner);
  window.removeEventListener("keydown", escKeyCloseModal);
}
