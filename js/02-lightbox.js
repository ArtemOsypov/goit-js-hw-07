import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galary = document.querySelector(".gallery");
const imageItem = createGalaryItem(galleryItems);
galary.insertAdjacentHTML("beforeend", imageItem);

galary.addEventListener("click", onGalaryClick);

function createGalaryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
function onGalaryClick(evt) {
  evt.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});
