//import styles
import { styles } from "./util.js";

let wrapMovies = null;
export let inputSearch = null;
export let checkboxTrigger = false;

//constructor of elements
const constrElem = ({
  tag = "div",
  attrs = {},
  container = null,
  position = "append",
  e = null,
  handler = null,
}) => {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "innerHTML") {
      el.innerHTML = value;
    } else {
      el.setAttribute(key, value);
    }
  });
  if (container && position === "append") {
    container.appendChild(el);
  }
  if (container && position === "prepend") {
    container.prepend(el);
  }
  if (e && handler && typeof handler === "function") {
    el.addEventListener(e, handler);
  }
  return el;
};

const constrStyle = () => {
  constrElem({
    tag: "style",
    attrs: {
      innerHTML: styles,
    },
    container: document.head,
  });
};

const constrWrap = () => {
  const contr = constrElem({
    type: "div",
    attrs: {
      class: "container",
    },
    container: document.body,
    position: "prepend",
  });

  constrElem({
    tag: "h1",
    attrs: {
      innerHTML: "Write favourite film",
      class: "title",
    },
    container: contr,
  });

  const wrapper = constrElem({
    tag: "div",
    attrs: {
      class: "wrapper",
    },
    container: contr,
  });

//search group elements
  const searchGrpInput = constrElem({
    tag: "div",
    attrs: {
      class: "search__group search__group--input",
    },
    container: wrapper,
  });

  constrElem({
    tag: "label",
    attrs: {
      for: "search",
      innerHTML: "Movie searсh:",
      class: "input__label",
    },
    container: searchGrpInput,
  });
  inputSearch = constrElem({
    tag: "input",
    attrs: {
      id: "search",
      type: "search",
      class: "input-search",
      placeholder: "Enter film name",
    },
    container: searchGrpInput,
  });

  const searchGrpCheckbox = constrElem({
    tag: "div",
    attrs: {
      class: "search__group  search__group--checkbox",
    },
    container: wrapper,
  });

  constrElem({
    tag: "input",
    attrs: {
      id: "myCheckbox",
      class: "input-checkbox",
      type: "checkbox",
    },
    container: searchGrpCheckbox,
    e: "click",
    handler: () => {
      checkboxTrigger = !checkboxTrigger;
    },
  });

  constrElem({
    tag: "label",
    attrs: {
      for: "myCheckbox",
      class: "checkbox__label",
      innerHTML: "Add film to list",
    },
    container: searchGrpCheckbox,
  });

  wrapMovies = constrElem({
    attrs: {
      class: "movies",
    },
    container: contr,
  });
};

//create movies
export const movieAdd = (movie) => {
  const item = constrElem({
    tag: "div",
    attrs: {
      class: "movie-item",
    },
    container: wrapMovies,
    position: "prepend",
  });
  const titleSpan = constrElem({
    tag: "a",
    attrs: {
      class: "movie-title",
      innerHTML: `${movie.Title}`,
      href: "https://www.imdb.com/title/" + movie.imdbID,
    },
    container: item,
  });

  const pic = constrElem({
    tag: "img",
    attrs: {
      class: "movie-img",
      src: /(https?):\/\//i.test(movie.Poster)
        ? movie.Poster
        : "assets/img/no-image.png",
      alt: `${movie.Title}, ${movie.Year}`,
      title: `${movie.Title}, ${movie.Year}`,
      href: "https://www.imdb.com/title/" + movie.imdbID,
    },
    container: titleSpan,
  });
};

export const clearMovies = () => {
  wrapMovies && (wrapMovies.innerHTML = "");
};

export const renderMovies = () => {
  constrStyle();
  constrWrap();
};
