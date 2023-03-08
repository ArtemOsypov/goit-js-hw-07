import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galary = document.querySelector(".gallery");
const imageItem = createGalaryItem(galleryItems);
galary.insertAdjacentHTML("beforeend", imageItem);
const items = document.querySelectorAll("gallery__link");
galary.addEventListener("click", onGalaryClick);

function createGalaryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalaryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  openModalWindow(evt);
}

function openModalWindow(evt) {
  const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `);

  instance.show();

  window.addEventListener("keydown", closeModalWindow);

  function closeModalWindow(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
    window.removeEventListener("keydown", closeModalWindow);
  }
}
