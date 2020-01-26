const pictures = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg",
    description: "Hokkaido Flower"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg",
    description: "Aerial Beach View"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea"
  }
];

const ulItems = document.querySelector(".gallery");
const ulItemsByHTML = document.getElementsByClassName("gallery__item");
const liItem = document.querySelector("li");
const exit = document.querySelector(".lightbox__button");
const window = document.querySelector(".lightbox");
const photo = document.querySelector(".lightbox__image");
const array = [];
let el = 0;

for (let i = 0; i < pictures.length; i++) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  const href = document.createElement("a");
  const img = document.createElement("img");
  href.classList.add("gallery__link");
  img.classList.add("gallery__image");
  href.href = pictures[i].preview;
  img.src = pictures[i].preview;
  img.alt = pictures[i].description;
  img.dataset.source = pictures[i].original;
  ulItems
    .appendChild(li)
    .appendChild(href)
    .appendChild(img);
}

ulItems.addEventListener("click", e => {
  e.preventDefault();
  window.classList.add("is-open");
  Array.from(ulItemsByHTML).forEach(item => {
    array.push(item.children[0].children[0]);
  });

  el = array.findIndex(focus => focus === e.target);
  photo.src = array[el].dataset.source;
  photo.alt = array[el].alt;
});

exit.addEventListener("click", e => {
  window.classList.remove("is-open");
  photo.src = "";
  photo.alt = "";
  array.splice(0, array.length);
});

document
  .querySelector(".lightbox__button_left")
  .addEventListener("click", () => {
    el--;
    if (el > array.length || el < 0) {
      el = array.length - 1;
    }
    photo.src = array[el].dataset.source;
    photo.alt = array[el].alt;
  });

document
  .querySelector(".lightbox__button_right")
  .addEventListener("click", () => {
    el++;
    if (el > array.length - 1 || el < 0) {
      el = 0;
    }
    photo.src = array[el].dataset.source;
    photo.alt = array[el].alt;
  });

if (array !== []) {
  document.body.addEventListener(
    "keyup",
    e => {
      const key = e.keyCode;

      if (key == 27) {
        window.classList.remove("is-open");
        photo.src = "";
        photo.alt = "";
        array.splice(0, array.length);
      }

      if (key == 37) {
        el--;
        if (el > array.length || el < 0) {
          el = array.length - 1;
        }
        photo.src = array[el].dataset.source;
        photo.alt = array[el].alt;
      }

      if (key == 39) {
        el++;
        if (el > array.length - 1 || el < 0) {
          el = 0;
        }
        photo.src = array[el].dataset.source;
        photo.alt = array[el].alt;
      }
    },
    false
  );
}
