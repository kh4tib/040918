let galleryButton = document.querySelector(".cta__gallery");
let likeButton = document.querySelector(".header__like");
let galleryWindow = document.querySelector(".main__gallery");
let device = document.querySelector(".main__content");

galleryButton.addEventListener("click", () => {
    galleryWindow.classList.toggle("js-opacity-zero");
    device.classList.toggle("js-box-shadow");
    galleryButton.classList.toggle("js-gallery-clicked");
});

likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("js-like-clicked");
});