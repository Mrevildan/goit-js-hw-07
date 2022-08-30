import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href ="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source=${original}
    alt=${description}
/>
</a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onClickLargeImg);

function onClickLargeImg(evt) {
  evt.preventDefault();

  const isGalleryPhotoEl = evt.target.classList.contains("gallery__image");

    if (!isGalleryPhotoEl) {
    return;
  }
  const photoUrlEl = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img class="modal__image" src="${photoUrlEl}"/>`
  );

  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(evt) {
    const ESC_KEY_CODE = "Escape";

    if (evt.code === ESC_KEY_CODE) {
      instance.close();

      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
console.log(galleryItems);
