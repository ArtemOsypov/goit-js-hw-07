import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galary = document.querySelector(".gallery");
const imageItem = createGalaryItem(galleryItems);
galary.insertAdjacentHTML("beforeend", imageItem);
const items = document.querySelectorAll("gallery__link");
galary.addEventListener("click", onGalaryClick);

function onGalaryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  openModalWindow(evt);
  onEscKeyPress(evt);
}

function openModalWindow(evt) {
  window.addEventListener("keydown", onEscKeyPress);
  const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
  instance.show();
}
function onEscKeyPress(evt) {
  if (evt.code === "Escape") {
    console.log(`${evt.code}`);
    closeModalWindow();
  }
}
function closeModalWindow() {
  instance.close();
}

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
// console.log(createGalaryItem(galleryItems));
